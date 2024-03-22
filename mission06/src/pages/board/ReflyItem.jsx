import React from "react";
import PropTypes from "prop-types";

ReflyItem.propTypes = {
  item: PropTypes.object.isRequired,
};

function ReflyItem({ item }) {
  console.log(item);

  return (
    <div>
      <h5>
        <img
          width="30px"
          src="https://i.namu.wiki/i/o0BdyBR_G5rTNZH731sc9aOuq1OYdQKBYWaM-B9d0oRnIhsl2jZ-D7gTTGL_PKCxxaDiJmiGpUxZVVQll2D7-7W2lCpqoSwO-24H5IqeDXmVcbpIHZUNfE7vmQ37phOrvR6vETKkDAWlKVPsoNuZ-g.webp"
          alt=""
        />
        <a href="">{item.user.name}</a>
      </h5>
      <pre>{item.comment}</pre>
      <time dateTime={item.createdAt}>{item.createdAt}</time>
    </div>
  );
}

export default ReflyItem;
