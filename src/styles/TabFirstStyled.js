import styled from "styled-components";
import { rgba } from "polished";

export const TabContentContainer = styled.div`
  position: relative;
  margin: 10px auto 0;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${rgba("white", 0.15)};
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px;
  border-radius: 10px;
`;


export const FormItem = styled.div`
  display: ${(props) => (props.active ? "flex" : "none")};
`;

export const ContentDiv = styled.div`
  height: 100%;
`;

export const ImageFirstDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ImageFirst = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 35%;
  max-height: auto;
`;

export const ButtonDiv = styled.div`
  position: absolute;
  right: 30px;
  bottom: 30px;
  width: 100%;
`;

export const ButtonNext = styled.button`
  display: ${(props) => (props.index < 6 ? "inline-block" : "none")};
  float: right;
  background: white;
  color: #5c001e;
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #5c001e;
  border-radius: 3px;
`;

export const ButtonPrev = styled.button`
  display: ${(props) => (props.index >= 0 ? "inline-block" : "none")};
  float: right;
  background: white;
  color: #5c001e;
  cursor: pointer;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #5c001e;
  border-radius: 3px;
`;