import restauranfood from '../images/restauranfood.jpg';
import greeksalad from '../images/greek salad.jpg';
import bruchetta from '../images/bruchetta.svg';
import lemon from '../images/lemon dessert.jpg';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <>
        <header>
            <div className="title">
              <h1>Little Lemon</h1>
              <h3>Chicago</h3>
              <p>We are a family owned<br/>
              Mediterranean restaurant,<br/>
              focused on traditional<br/>
              recipes served with a modern<br/>
              twist </p>
              <Link to="/reservation">
              <button> Reserve a Table</button>
              </Link>
            </div>
            <div className="title_img">
              <img src={restauranfood} alt="Title-Photo" />
            </div>
        </header>
        <main>
            <div className="title2">
         <h1>This weeks Specials!</h1>
         <button>Online Menu</button>
         </div>
         <div className="content">
          <div className="content_1">
              <div className='content_img_1'>
               <img src={greeksalad} alt="salad" />
              </div>
              <div className='content_text_1'>
            <h3>Greek salad &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  $12.99</h3><br/>
            <p> The famous greek salad of crispy lettuce, pepers,olives
                and our chicago style feta cheese, garnish with cruncy 
                garlic and rosmary croutons. 
            </p>
            <h4>
                Order a delivery 
            </h4>
              </div>
          </div>
          <div className="content_2">
              <div className='content_img_2'>
             <img src={bruchetta} alt="dish" />
              </div>
              <div className='content_text_2'>
              <h3>Bruchetta&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  $5.99</h3><br/>
              <p>Our Bruchetta is made from grilled bread that has been 
                smeared with garlic and seasoned with salt and olive oil</p>
                <h4>
                Order a delivery 
                </h4>
              </div>
          </div>
          <div className="content_3">
              <div className='content_img_3'>
              <img src={lemon} alt="lemon" />
              </div>
              <div className='content_text_3'>
              <h3>Lemon Desert&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; $5.00</h3><br/>
              <p> THis comes straight from grandma's recipe book, every last 
                ingredient has been sourced and is as authentic as can be 
                imagined</p>
                <h4>
                Order a delivery 
                </h4>
              </div>
          </div>
         </div>

        </main>
        </>
    );
}

export default Home;
