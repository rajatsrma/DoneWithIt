import client from "./client";

const END_POINT = "/listings";

const getListings = () => client.get(END_POINT);

const postListings = (listing) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value);
  data.append("description", listing.description);

  listing.imageUris.forEach((uri, index) => {
    data.append("images", {
      name: "image" + index,
      type: image / jpeg,
      uri: uri,
    });
  });

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));

  return client.post(END_POINT, data);
};
export default {
  getListings,
  postListings,
};
