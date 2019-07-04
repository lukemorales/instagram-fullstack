import styled from 'styled-components';

export const PostList = styled.section`
  width: 100;
  max-width: 580px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Post = styled.article`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 30px 0 0;

  &:last-child {
    margin-bottom: 30px;
  }

  & > img {
    width: 100%;
  }
`;

export const Header = styled.header`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-size: 13px;
`;

export const UserPlace = styled.span`
  font-size: 11px;
  color: #666;
  margin-top: 3px;
`;

export const Footer = styled.footer`
  padding: 20px;
`;

export const Actions = styled.div`
  margin-bottom: 10px;

  & button {
    background: transparent;
    border: 0;
    cursor: pointer;
  }

  & img {
    height: 20px;
    margin-right: 10px;
  }
`;

export const PostDescription = styled.p`
  font-size: 13px;
  margin-top: 2px;
  line-height: 18px;
`;

export const Hashtags = styled.span`
  color: #7159c1;
  display: block;
`;
