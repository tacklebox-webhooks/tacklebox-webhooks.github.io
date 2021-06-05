$(document).ready(() => {
  const $parent = $("div.code-block");

  $parent.click((event) => {
    const newLang = $(event.target);
    
    if (newLang.hasClass('language-option')) {
      const codeBlock = $(event.currentTarget);
      const currentLang = codeBlock.find("p.selected");
      const currentCode = codeBlock.find("pre.selected")
      const newLangName = newLang.attr('name');
      
      if (currentLang.attr("name") !== newLangName) {
        currentLang.removeClass("selected");
        currentCode.removeClass("selected");
        
        const newCode = codeBlock.find(`pre[name='${newLangName}']`);
        newCode.addClass("selected");
        newLang.addClass("selected");
      }
    }
  });
});