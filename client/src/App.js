import Booking from './components/booking/Booking';
import Footer from './components/Footer';
import Header from './components/Header';
import InfoGrid from './components/InfoGrid';
import Navigation from './components/Navigation';
import ReviewsRating from './components/ReviewsRating';
import './styles/app.css';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <InfoGrid />
        <Booking />
        <ReviewsRating />
      </main>
      <Footer />
    </>
  );
}

export default App;
