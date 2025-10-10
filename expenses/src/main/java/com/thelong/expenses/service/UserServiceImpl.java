package com.thelong.expenses.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.thelong.expenses.model.User;
import com.thelong.expenses.model.dto.UserRequest;
import com.thelong.expenses.repo.UserRepo;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo repo;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtService jwtService;

    @Override
    public String register(UserRequest user) {
        User founded = repo.findByUsername(user.getUsername());
        if (founded == null) {
            founded = new User();
            founded.setUsername(user.getUsername());
            founded.setPassword(encoder.encode(user.getPassword()));
            repo.save(founded);
            return "Saved";
        }

        return "!";
    }

    @Override
    public String verify(UserRequest user) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));

        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(user.getUsername());
        }

        return "!";
    }

}
