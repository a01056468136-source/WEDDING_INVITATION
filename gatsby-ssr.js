const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta property="og:type" content="website" key="og:type" />,
    <meta property="og:title" content="동호❤가영 결혼식에 초대합니다" key="og:title" />,
    <meta property="og:description" content="저희의 소중한 날에 초대합니다." key="og:description" />,
    <meta
      property="og:image"
      content="https://a01056468136-source.github.io/WEDDING_INVITATION/thumbnail.jpg"
      key="og:image"
    />,
    <meta
      property="og:url"
      content="https://a01056468136-source.github.io/WEDDING_INVITATION"
      key="og:url"
    />,
  ]);
};
