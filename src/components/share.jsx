import React, { useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Button, Divider, message } from "antd";
import { MessageFilled, LinkOutlined } from "@ant-design/icons";
import styled from "styled-components";

import {
  KAKAOTALK_API_TOKEN,
  KAKAOTALK_SHARE_IMAGE,
  WEDDING_INVITATION_URL,
  GROOM_NAME,
  BRIDE_NAME,
} from "../../config";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 100%;
  text-align: center;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
`;

const KakaoTalkShareButton = styled(Button)`
  background: #fee500;
  border-color: #fee500;
  color: #181600;
  width: 100%;
`;

const LinkShareButton = styled(Button)`
  background-color: rgba(217, 125, 131, 0.2);
  border-color: rgba(217, 125, 131, 0.2) !important;
  color: var(--title-color) !important;
  width: 100%;
`;

const Share = () => {
  // ✅ 카카오 초기화 (딱 1번)
 useEffect(() => {
  const loadKakaoSDK = () => {
    if (window.Kakao) return;

    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;

    script.onload = () => {
      console.log("Kakao SDK loaded");

      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(KAKAOTALK_API_TOKEN);
        console.log("Kakao init 완료");
      }
    };

    document.head.appendChild(script);
  };

  loadKakaoSDK();
}, []);

  // ✅ 카카오 공유
  const sendKakao = () => {
    console.log("clicked");

  if (!window.Kakao || !window.Kakao.Link) {
    console.log("Kakao Link 없음");
    message.error("카카오 SDK 로드 실패");
    return;
  }

    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: `${GROOM_NAME} ❤ ${BRIDE_NAME} 결혼식에 초대합니다`,
        description: "26-12-12 오후2시 청첩장을 확인해주세요 💌",
        imageUrl: KAKAOTALK_SHARE_IMAGE,
        link: {
          mobileWebUrl: "https://a01056468136-source.github.io/WEDDING_INVITATION/",
          webUrl: "https://a01056468136-source.github.io/WEDDING_INVITATION/",
        },
      },
      buttons: [
        {
          title: "청첩장 열기",
          link: {
            mobileWebUrl: "https://a01056468136-source.github.io/WEDDING_INVITATION/",
            webUrl: "https://a01056468136-source.github.io/WEDDING_INVITATION/",
          },
        },
      ],
    });
  };

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>청첩장 공유하기</Title>
      </Divider>

      {/* 카카오 공유 */}
      <KakaoTalkShareButton
        icon={<MessageFilled />}
        size="large"
        onClick={sendKakao}
      >
        카카오톡으로 공유하기
      </KakaoTalkShareButton>

      {/* 링크 복사 */}
      <CopyToClipboard text={WEDDING_INVITATION_URL}>
        <LinkShareButton
          icon={<LinkOutlined />}
          size="large"
          onClick={() => message.success("링크 복사 완료")}
        >
          링크로 공유하기
        </LinkShareButton>
      </CopyToClipboard>
    </Wrapper>
  );
};

export default Share;
