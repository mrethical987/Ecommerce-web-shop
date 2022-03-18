import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CardActionArea,
  Button,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./style.css";

const CustomCard = ({
  basket,
  product,
  addProduct,
  updateProduct,
  RemoveItemFromBasket,
}) => {
  console.log(product);
  return (
    <Card className="custom-card">
      <Link className="content" to={`/product-view/${basket ? product.product_id : product.id}`}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="260"
          className="card-image"
          image={product.image.url}
          title="Contemplative Reptile"
        />
        <CardContent className="content">
          <Typography
            className="title"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {product.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      {basket && (
        <CardActions>
          <Typography
            className="basket-item-price"
            gutterBottom
            variant="h5"
            component="h2"
          >
            {product.price.formatted_with_symbol}
          </Typography>
        </CardActions>
      )}
      <CardActions className="actions-content">
        {!basket && (
          <>
            <Typography
              className="price"
              gutterBottom
              variant="h5"
              component="h2"
            >
              {product.price.formatted_with_symbol}
            </Typography>
            <Button
              size="large"
              className="custom-button"
              onClick={() => {
                addProduct(product.id, 1);
              }}
            >
              <AddShoppingCart />
            </Button>
          </>
        )}
        {basket && (
          <>
            <Button
              size="small"
              color="secondary"
              variant="outlined"
              onClick={() => {
                RemoveItemFromBasket(product.id);
              }}
            >
              Remove
            </Button>
            <>
              <Button
                size="small"
                color="secondary"                
                className="product-quantity"
                variant="outlined"
                onClick={() => {
                  updateProduct(product.id, product.quantity - 1);
                }}
              >
                -
              </Button>
              <Typography>&nbsp;{product.quantity}&nbsp;</Typography>
              <Button
                size="small"
                variant="outlined"
                className="product-quantity"
                onClick={() => {
                  updateProduct(product.id, product.quantity + 1);
                }}
              >
                +
              </Button>
            </>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default CustomCard;
