import app from "./app";
import { port } from './config';
import { globalErrorHandler, notFound } from "./middleware";


// notFound handler
app.use("*", notFound);

app.use(globalErrorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });







