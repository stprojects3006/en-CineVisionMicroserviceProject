package com.kaankaplan.userService.controller;

import com.kaankaplan.userService.business.abstracts.AuthService;
import com.kaankaplan.userService.entity.dto.UserAuthenticationResponseDto;
import com.kaankaplan.userService.entity.dto.UserLoginRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public UserAuthenticationResponseDto login(@RequestBody UserLoginRequestDto userLoginRequestDto) {
        
        UserAuthenticationResponseDto userLoginDto = new UserAuthenticationResponseDto();
        userLoginDto.setEmail(userLoginRequestDto.getEmail());
        userLoginDto.setFullName("Sanjeev T");

        return userLoginDto;
        
        //return authService.login(userLoginRequestDto);
    }
}
