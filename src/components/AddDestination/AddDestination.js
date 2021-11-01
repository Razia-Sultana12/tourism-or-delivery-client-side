import axios from 'axios';
import { Card, Col,} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import tour from '../flaticons/tour.png';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './AddDestination.css';
const AddDestination = () => {
    

   
    const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("https://safe-brook-92113.herokuapp.com/countries",data)
      .then((res) => {
        if(res.data.insertedId){
          alert('Congrats,You have added a new destination successfully!');
          reset();
        }
      })
     
  };
     
    return (
      <div>
      <Header></Header>
      <div className="bg-img login-page p-5">
        
        {/* <h1><img src={tour} width="64" height="64" alt="" />TourHour</h1> */}
        <Col xs={12} md={5} className="mx-auto mt-5">
          <Card className="p-3">
            <h3 className="text-primary">Add New Destination</h3>
            <div className="divider bg-info rounded mb-3 mx-auto"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="add-order-input px-3 rounded-3 border-info"
                placeholder="Destination title"
                {...register("title", { required: true })}
              />{" "}
              <br />
              <input
                className="add-order-input my-2 px-3 rounded-3 border-info"
                placeholder="Add Description"
                {...register("description", { required: true })}
              />{" "}
              <br />
              <input
                className="add-order-input px-3 rounded-3 border-info"
                placeholder="Add image url"
                {...register("image", { required: true })}
              />{" "}
              <br />
              <input
                className="add-order-input my-2 px-3 rounded-3 border-info"
                placeholder="Add Real Price"
                {...register("price", { required: true })}
              />{" "}
              <br />
              <input
                className="add-order-input px-3 rounded-3 border-info"
                placeholder="Add offer Price"
                {...register("offer", { required: true })}
              />{" "}
              <br />
              <input
                className="add-order-input my-2 px-3 rounded-3 border-info"
                placeholder="Add duration"
                {...register("time", { required: true })}
              />{" "}
              <br />
              <input
                className="add-order-input px-3 rounded-3 border-info"
                placeholder="Add review"
                {...register("review", { required: true })}
              />{" "}
              <br />
              <input
                className="add-order-input mt-2 px-3 rounded-3 border-info"
                placeholder="Add reviewNum"
                {...register("reviewNum", { required: true })}
              />{" "}
              <br />
              <br />
              <input className="btn btn-primary mx-auto px-3 rounded-3 px-3 rounded-3 border-info" type="submit" value="Proceed"/>
              
            </form>
          </Card>
        </Col>

        
      </div>
      <Footer></Footer>
      </div>
    );
};

export default AddDestination;