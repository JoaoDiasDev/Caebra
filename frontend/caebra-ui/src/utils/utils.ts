const saveRefUserId = (id: string) => {
  localStorage.setItem("ref_user_id", id);
};

const getRefUserId = () => {
  return localStorage.getItem("ref_user_id");
};

const checkRefUserId = () => {
  const id = new URLSearchParams(window.location.search).get("ref_user_id");
  if (id) {
    saveRefUserId(id);
  } else if (!getRefUserId()) {
    window.location.href = "/product-try";
  }
};

export { saveRefUserId, getRefUserId, checkRefUserId };
