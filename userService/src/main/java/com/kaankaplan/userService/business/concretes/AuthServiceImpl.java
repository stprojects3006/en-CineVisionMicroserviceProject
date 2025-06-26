package com.kaankaplan.userService.business.concretes;

import com.kaankaplan.userService.business.abstracts.AuthService;
import com.kaankaplan.userService.business.abstracts.UserService;
import com.kaankaplan.userService.core.security.JwtProviderService;
import com.kaankaplan.userService.entity.User;
import com.kaankaplan.userService.entity.dto.UserAuthenticationResponseDto;
import com.kaankaplan.userService.entity.dto.UserLoginRequestDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {

    private final AuthenticationManager authenticationManager;
    private final JwtProviderService jwtProvider;
    private final UserService userService;

    @Override
    public UserAuthenticationResponseDto login(UserLoginRequestDto userLoginRequestDto) {
    
    Authentication authenticate =null;
    try{

        log.info("----- @@@@@@@@ loading the user - authentication manager-----@@@@@");
        authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                userLoginRequestDto.getEmail(),
                userLoginRequestDto.getPassword()
        ));
        log.info("-----@@@@@ loaded the user - authentication manager" + authenticate.getName() + "-----@@@@@");
    }
    catch(Exception e) {
        log.info(e.getMessage());
        log.info("error message ends");
        e.getStackTrace();
    }

    
        SecurityContextHolder.getContext().setAuthentication(authenticate);
        String token = jwtProvider.generateToken(authenticate);

        User user = userService.getUserByEmail(userLoginRequestDto.getEmail());

        return UserAuthenticationResponseDto.builder()
                .userId(user.getUserId())
                .fullName(user.getFullName())
                .email(userLoginRequestDto.getEmail())
                .token(token)
                .roles(authenticate.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
                .build();
    }

}
