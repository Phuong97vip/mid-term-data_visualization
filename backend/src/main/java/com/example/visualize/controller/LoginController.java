package com.example.visualize.controller;

import com.example.visualize.dto.LoginRequest;
import com.example.visualize.dto.LoginResponse;
import com.example.visualize.dto.RegisterRequest;
import com.example.visualize.model.User;
import com.example.visualize.service.CustomUserDetailsService;
import com.example.visualize.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class LoginController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody LoginRequest loginRequest) throws Exception {
        try {
            // Xác thực người dùng
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())
            );
        } catch (Exception e) {
            throw new Exception("Incorrect username or password", e);
        }

        // Tạo token
        final UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.getUsername());
        final String jwt = jwtUtil.generateToken(userDetails);

        return ResponseEntity.ok(new LoginResponse(jwt));
    }
    
    @PostMapping("/register")
    public ResponseEntity<?>registerUser(@RequestBody RegisterRequest registerRequest){
    	User user = userDetailsService.registerUser(registerRequest);
    	return ResponseEntity.ok("User Register Succesfully With Username: "+user.getUsername()+" Password: "+user.getPassword());
    }
}