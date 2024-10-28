package com.toudeuk.server.domain.user.response.impl;


import com.toudeuk.server.domain.user.entity.ProviderType;
import com.toudeuk.server.domain.user.response.OAuth2Response;

import java.util.Map;

public class KakaoResponse implements OAuth2Response {
	private final Map<String, Object> attribute;
	private final Map<String, Object> properties;
	private final Map<String, Object> kakaoAccount;

	public KakaoResponse(Map<String, Object> attributes) {
		this.attribute = attributes;
		this.properties = (Map<String, Object>)attributes.get("properties");
		this.kakaoAccount = (Map<String, Object>)attributes.get("kakao_account");
	}

	@Override
	public ProviderType getProvider() {
		return ProviderType.KAKAO;
	}

	@Override
	public String getProviderId() {
		return attribute.get("id").toString();
	}

	@Override
	public String getEmail() {
		return kakaoAccount.get("email").toString();
	}

	@Override
	public String getName() {
		return properties.get("nickname").toString();
	}

	@Override
	public String getGender() {
		return "M";
	}

}