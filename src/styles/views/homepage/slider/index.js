import styled from "styled-components";

export const SlideContainer = styled.div`
  display: flex;
`;

export const BackimageWraper = styled.div`
  width: calc(100% - 77%);
  margin: 3vw 0 0 0;
`;

export const BackImg = styled.img`
  width: calc(100% - 1%);
  height: calc(100% - 3%);
`;

// content
export const SlideWraper = styled.div`
  margin: 0 0 0 2.8vw;
  padding: 2vw 0 0 0;
  width: calc(100% - 22%);
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: clamp(0.1rem, 1.5vw, 1.8rem);
`;
export const LeftArrow = styled.img`
  margin: 0 0.7vw;
  width: clamp(2rem, 4vw, 10rem);
`;

export const RightArrow = styled.img`
  width: clamp(2rem, 4vw, 10rem);
  margin: 0 0.7vw;
`;
export const ArrowIcon = styled.div`
  display: flex;

  width: calc(100% - 60%);
  margin: 1.6vw 0 0 0;
`;

export const Contant = styled.p`
  color: #828282;
  font-size: clamp(0.8rem, 1.3vw, 1.8rem);
  font-weight: 500;
`;

export const Heading = styled.h1`
  color: #1d1d1d;
  font-size: clamp(2rem, 3.7vw, 4rem);
  border-bottom: 12px solid #f9c51c;
  width: clamp(12.8rem, 23.5vw, 25rem);
  height: clamp(2.5rem, 4vw, 5rem);
`;

export const SubHeading = styled.h3`
  color: rgba(40, 40, 40, 1);
  text-transform: capitalize;
  font-size: clamp(0.8rem, 1.4vw, 2rem);
  margin: 1.8vw 0 0;
  width: calc(100% - 10%);
`;

export const WrapContant = styled.p`
  color: rgba(79, 79, 79, 1);
  text-transform: none;
  margin: 1.4vw 0 0;
  line-height: 1.5vw;
  font-size: clamp(0.5rem, 1.2vw, 2rem);
  font-weight: 400;
  width: clamp(24rem, 50vw, 60rem);
  word-spacing: 0.1rem;
`;

// profile
export const ProfileWraper = styled.div`
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: calc(100% - 44%);
  border-radius: 16px;
  border: 2px solid rgba(29, 46, 136, 0.6);
  margin: 5vw 0 0 0;
  height: calc(100% - 52%);
  position: relative;
`;
export const ProfileContant = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: clamp(5rem, 10vw, 12rem);
  margin: 0 3vw 0 6vw;
`;

export const PersonInformation = styled.div``;

export const PersonName = styled.h2`
  color: rgba(29, 29, 29, 1);
  font-size: clamp(0.9rem, 1.6vw, 2rem);
`;

export const Destination = styled.p`
  color: #94a3b8;
  font-size: clamp(0.6rem, 1.07vw, 1.5rem);
  line-height: 2.1vw;
`;

export const ImgWrap = styled.div`
  margin: 0.8vw 0 0 0;
  display: flex;
  justify-content: space-between;
`;

export const WrapImg = styled.img`
  width: clamp(0.9rem, 1.5vw, 2rem);
`;

export const PersonAbout = styled.p`
  color: rgba(29, 29, 29, 1);
  font-weight: 500;
  margin: 2vw auto;
  font-size: clamp(0.5rem, 1.02vw, 1.5rem);
  width: clamp(13rem, 29vw, 40rem);
  line-height: 1.4vw;
  word-spacing: 0.1vw;
`;

export const ProfileBackImage = styled.img`
  position: absolute;
  top: clamp(-2.5rem, -2.3vw, -1rem);
  right: 0.5vw;
  width: calc(100% - 77%);
`;
