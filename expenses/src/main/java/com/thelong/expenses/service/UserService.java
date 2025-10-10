package com.thelong.expenses.service;

import com.thelong.expenses.model.dto.UserRequest;

public interface UserService {
    
    String register(UserRequest user);
    String verify(UserRequest user);
}
