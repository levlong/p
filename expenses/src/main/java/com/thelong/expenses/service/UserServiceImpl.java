package com.thelong.expenses.service;

import org.springframework.beans.factory.annotation.Autowired;
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

}
