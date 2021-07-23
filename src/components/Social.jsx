import React from "react";

const SocialShare = [
  {
    iconName: "facebook",
    link: "https://www.facebook.com/tokyocazarezg",
  },
  { iconName: "twitter", link: "https://twitter.com/tokyoeltemible" },
  {
    iconName: "instagram",
    link: "https://www.instagram.com/tokyo.czrz",
  },
  {
    iconName: "github",
    link: "https://www.github.com/tokyocazarezg",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
