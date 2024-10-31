package com.toudeuk.server.tmp;

import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;

import com.toudeuk.server.domain.user.service.JWTService;

import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class GameClickController {

	private static Integer cnt = 0;
	private final JWTService jwtService;
	private final SimpMessagingTemplate messagingTemplate;


	@MessageMapping("/game")
	public void sendPublish(@Header("Authorization") String bearerToken) throws Exception {
		;
		Long userId = resolveToken(bearerToken);
		System.out.println(userId + " 유저 아이디 ");

		// 모든 구독자에게 메시지 전송
		messagingTemplate.convertAndSend("/topic/game", cnt);

		// 특정 사용자에게만 개별 메시지 전송
		messagingTemplate.convertAndSendToUser(
			userId.toString(),
			"/queue/game",
			"개인 메시지: " + cnt
		);
	}




	private Long resolveToken(String bearerToken) {
		if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
			String token = bearerToken.substring(7);

			Claims claims = jwtService.parseClaims(token);
			return Long.parseLong(claims.getSubject());
		}
		return null;
	}
}