package com.example.visualize.service;

import com.example.visualize.dto.RegisterRequest;
import com.example.visualize.model.User;
import com.example.visualize.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    @Lazy
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("User not found with username: " + username));
        return user;
    }
    
    public User registerUser(RegisterRequest registerRequest) {
    	User user = new User();
    	user.setUsername(registerRequest.getUsername());
    	user.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
    	return userRepository.save(user);
    	
    }
    
    
}