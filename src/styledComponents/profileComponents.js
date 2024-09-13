import { createGlobalStyle, styled } from "styled-components";
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf";
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf";
import RobotoLight from "../assets/fonts/Roboto-Light.ttf";

import headerBackgroundImage from "../assets/images/header.jpg";
import profileImage from "../assets/images/profileImg.png";
import telegramSvg from "../assets/images/Telegram.svg";
import friend_1 from "../assets/images/friend-1.png";
import friend_2 from "../assets/images/friend-2.png";
import friend_3 from "../assets/images/friend-3.png";
import friend_4 from "../assets/images/friend-4.png";
import gallery_1 from "../assets/images/gallery-1.png";
import gallery_2 from "../assets/images/gallery-2.png";
import gallery_3 from "../assets/images/gallery-3.png";
import gallery_4 from "../assets/images/gallery-4.png";
import gallery_5 from "../assets/images/gallery-5.png";
import gallery_6 from "../assets/images/gallery-6.png";
import home from "../assets/images/main.svg";
import chat from "../assets/images/chat.svg";
import favorite from "../assets/images/favorite.svg";
import user from "../assets/images/user.svg";

export const GlobalStyle = createGlobalStyle`
   @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold}) format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
    
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    background: #FFF;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;
  }
`;

const HeaderStyled = styled.header`
  width: 428px;
  height: 255px;
  background: url(${headerBackgroundImage}) center/cover;
  position: relative;
`;

const HeaderTriangle = styled.div`
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-left: 428px solid #FFF;
  position: absolute;
  bottom: 0;
`;

const LeftArrowSvg = styled.svg`
  width: 26px;
  height: 20px;

  position: absolute;
  top: 32px;
  left: 27px;
`;

const LeftArrow = () => (
  <LeftArrowSvg viewBox="0 0 26 20">
    <path
      stroke="#F7F0F0"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 10.0208H24M2 10.0208L11.625 2M2 10.0208L11.625 18.0417"
    />
  </LeftArrowSvg>
);

const RightIconSvg = styled.svg`
  width: 25px;
  height: 25px;
  fill: #f8f8f8;

  position: absolute;
  top: 28px;
  right: 23px;
`;

const RightIcon = () => (
  <RightIconSvg viewBox="0 0 25 25">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.1579 5.92105C13.1579 5.14349 13.311 4.37354 13.6086 3.65516C13.9062 2.93679 14.3423 2.28406 14.8921 1.73424C15.442 1.18442 16.0947 0.748274 16.8131 0.450713C17.5314 0.153152 18.3014 0 19.0789 0C19.8565 0 20.6265 0.153152 21.3448 0.450713C22.0632 0.748274 22.7159 1.18442 23.2658 1.73424C23.8156 2.28406 24.2517 2.93679 24.5493 3.65516C24.8468 4.37354 25 5.14349 25 5.92105C25 7.49141 24.3762 8.99745 23.2658 10.1079C22.1554 11.2183 20.6493 11.8421 19.0789 11.8421C17.5086 11.8421 16.0025 11.2183 14.8921 10.1079C13.7817 8.99745 13.1579 7.49141 13.1579 5.92105ZM0 5.92105C0 4.35069 0.623824 2.84465 1.73424 1.73424C2.84465 0.623823 4.35069 0 5.92105 0C7.49141 0 8.99745 0.623823 10.1079 1.73424C11.2183 2.84465 11.8421 4.35069 11.8421 5.92105C11.8421 7.49141 11.2183 8.99745 10.1079 10.1079C8.99745 11.2183 7.49141 11.8421 5.92105 11.8421C4.35069 11.8421 2.84465 11.2183 1.73424 10.1079C0.623824 8.99745 0 7.49141 0 5.92105ZM13.1579 19.0789C13.1579 18.3014 13.311 17.5314 13.6086 16.8131C13.9062 16.0947 14.3423 15.442 14.8921 14.8921C15.442 14.3423 16.0947 13.9062 16.8131 13.6086C17.5314 13.311 18.3014 13.1579 19.0789 13.1579C19.8565 13.1579 20.6265 13.311 21.3448 13.6086C22.0632 13.9062 22.7159 14.3423 23.2658 14.8921C23.8156 15.442 24.2517 16.0947 24.5493 16.8131C24.8468 17.5314 25 18.3014 25 19.0789C25 20.6493 24.3762 22.1553 23.2658 23.2658C22.1554 24.3762 20.6493 25 19.0789 25C17.5086 25 16.0025 24.3762 14.8921 23.2658C13.7817 22.1553 13.1579 20.6493 13.1579 19.0789ZM0 19.0789C0 17.5086 0.623824 16.0025 1.73424 14.8921C2.84465 13.7817 4.35069 13.1579 5.92105 13.1579C7.49141 13.1579 8.99745 13.7817 10.1079 14.8921C11.2183 16.0025 11.8421 17.5086 11.8421 19.0789C11.8421 20.6493 11.2183 22.1553 10.1079 23.2658C8.99745 24.3762 7.49141 25 5.92105 25C4.35069 25 2.84465 24.3762 1.73424 23.2658C0.623824 22.1553 0 20.6493 0 19.0789Z"
    />
  </RightIconSvg>
);

export const Header = () => (
  <HeaderStyled>
    <HeaderTriangle />
    <LeftArrow />
    <RightIcon />
  </HeaderStyled>
);

// Profile Info

const ProfileInfoStyled = styled.article`
  width: 393px;
  height: 246px;
  background: #fff;
  border-radius: 33px;
  box-shadow: 0px 5px 17px 0px rgba(123, 87, 182, 0.18);

  position: absolute;
  top: 132px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
`;

const ProfileImageWrapper = styled.div`
  width: 105px;
  height: 105px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.45);

  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: calc(100% - 50px);
`;

const ProfileImage = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileName = styled.h1`
  font-size: 20px;
  margin-bottom: 15px;
`;

const ProfileDesc = styled.p`
  display: inline-block;
  width: 326px;
  font-weight: 300;
  font-size: 12px;
  margin-bottom: 12px;
`;

const ProfileButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const ProfileFollowButton = styled.button`
  width: 285px;
  height: 45px;
  background: rgba(8, 79, 255, 1);
  outline: none;
  border: none;
  border-radius: 12px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

const ProfileTelegramIcon = styled.img`
  width: 18px;
`;

const ProfileTelegramIconWrapper = styled.div`
  background: #f0f0f0;
  width: 45px;
  height: 45px;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileInfo = () => (
  <ProfileInfoStyled>
    <ProfileImageWrapper>
      <ProfileImage src={profileImage} />
    </ProfileImageWrapper>
    <ProfileName>Thomas R.</ProfileName>
    <ProfileDesc>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </ProfileDesc>
    <ProfileButtonsWrapper>
      <ProfileFollowButton>Follow</ProfileFollowButton>
      <ProfileTelegramIconWrapper>
        <ProfileTelegramIcon src={telegramSvg} />
      </ProfileTelegramIconWrapper>
    </ProfileButtonsWrapper>
  </ProfileInfoStyled>
);

// ProfileStats

const ProfileStatsStyled = styled.article`
  width: 129px;
  height: 427px;
  background: rgba(248, 249, 252, 0.5);
  border-radius: 21px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

const StatItem = styled.div``;

const StatValue = styled.p`
  font-size: 28px;
  font-weight: bold;
  margin: 0;
`;

const StatLabel = styled.p`
  font-size: 14px;
  color: rgba(150, 150, 150, 1);
  font-weight: 300;
  margin: 0;
  margin-top: 4px;
`;

const Divider = styled.div`
  width: 73px;
  height: 1px;
  background-color: #e0e0e0;
  margin: 10px 0;
`;

const ProfileStats = () => (
  <ProfileStatsStyled>
    <StatItem>
      <StatValue>10K</StatValue>
      <StatLabel>Likes</StatLabel>
    </StatItem>

    <Divider />

    <StatItem>
      <StatValue>528</StatValue>
      <StatLabel>Following</StatLabel>
    </StatItem>

    <Divider />

    <StatItem>
      <StatValue>1.2K</StatValue>
      <StatLabel>Followers</StatLabel>
    </StatItem>
  </ProfileStatsStyled>
);

// Content

const Content = styled.section``;

// Friends

const FriendsStyled = styled.div`
  margin-bottom: 17px;
`;

const FriendsTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 14px;
`;

const FriendsImgWrapper = styled.div`
  display: flex;
  gap: 22px;
`;

const FriendsImg = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
`;

const Friends = () => (
  <FriendsStyled>
    <FriendsTitle>Friends</FriendsTitle>
    <FriendsImgWrapper>
      <FriendsImg src={friend_1} />
      <FriendsImg src={friend_2} />
      <FriendsImg src={friend_3} />
      <FriendsImg src={friend_4} />
    </FriendsImgWrapper>
  </FriendsStyled>
);

// Gallery

const GalleryStyled = styled.div``;

const GalleryTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 21px;
`;

const GalleryImgWrapper = styled.div`
  width: 250px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 8px;
  border-radius: 12px;
  overflow: hidden;
`;

const GalleryImg = styled.img`
  width: 120px;
`;

const Gallery = () => (
  <GalleryStyled>
    <GalleryTitle>Gallery</GalleryTitle>
    <GalleryImgWrapper>
      <GalleryImg src={gallery_1} />
      <GalleryImg src={gallery_2} />
      <GalleryImg src={gallery_3} />
      <GalleryImg src={gallery_4} />
      <GalleryImg src={gallery_5} />
      <GalleryImg src={gallery_6} />
    </GalleryImgWrapper>
  </GalleryStyled>
);

// Main

const MainStyled = styled.main`
  margin-top: 153px;
  display: flex;
  gap: 18px;
`;

export const Main = () => (
  <MainStyled>
    <ProfileStats />
    <Content>
      <Friends />
      <Gallery />
    </Content>
  </MainStyled>
);

// Footer

const FooterStyled = styled.footer`
  width: 100%;
  background: #FFF;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.div`
  width: 428px;

  display: flex;
  justify-content: space-around;
`;

const FooterIcon = styled.img`
  padding: 10px;
`;

export const Footer = () => (
  <FooterStyled>
    <FooterWrapper>
      <FooterIcon src={home} />
      <FooterIcon src={chat} />
      <FooterIcon src={favorite} />
      <FooterIcon src={user} />
    </FooterWrapper>
  </FooterStyled>
);
