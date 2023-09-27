import React from "react";

function LanguageSelector() {
  // const router = useRouter();

  // const handleLanguageChange = (
  //   event: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   const locale = event.target.value;
  //   router.push(router.pathname, router.asPath, { locale });
  // };

  return (
    <select
      // onChange={handleLanguageChange}
      className="header__navigation_language-select"
      name="languages"
      id="languages"
    >
      <option className="header__navigation_language-option" value="en-US">
        EN
      </option>
      <option className="header__navigation_language-option" value="ru-RU">
        RU
      </option>
    </select>
  );
}

export default LanguageSelector;
