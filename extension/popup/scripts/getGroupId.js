// Lấy group id - trường hợp url của group hiển thị tên chứ ko hiển thị id. Ví dụ: https://www.facebook.com/groups/j2team.community.girls
(function () {
  const group_name = document.title;
  const found = (check) => {
    if (check && check[0]) {
      window.prompt(`GROUP ID của ${group_name}:`, check[0]);
      return true;
    }
    return false;
  };
  if (found(/(?<=\/groups\/)(.\d+?)($|(?=\/)|(?=&))/.exec(location.href)))
    return;
  const list_a = document.querySelectorAll("a");
  for (let a of Array.from(list_a)) {
    if (found(/(?<=\/groups\/)(.\d+?)(?=\/user\/)/.exec(a.href))) return;
  }
  window.prompt(
    "Không tìm thấy GROUP ID nào trong trang web!\nBạn có đang ở đúng trang group chưa?\nTrang web Ví dụ:",
    "https://www.facebook.com/groups/j2team.community.girls"
  );
})();