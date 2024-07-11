import styled from 'styled-components';
import { useTour } from '../features/tour/useTour';
import Slider from '../ui/Slider';
import { FaDollarSign, FaMapMarker, FaMapMarkerAlt, FaRegClock, FaUser } from 'react-icons/fa';

const slides = [
  {
    image: '/details-01.jpg',
    title: 'image-01'
  },
  {
    image: '/details-02.jpg',
    title: 'image-02'
  },
  {
    image: '/details-03.jpg',
    title: 'image-03'
  },
  {
    image: '/details-04.jpg',
    title: 'image-04'
  }
];

const WrapperTour = styled.div`
  display: flex;
  min-width: 0;
`;

const WrapperBooking = styled.div``;

const WrapperComment = styled.div``;

const StyledDetail = styled.div`
  padding: 1.6rem 2.4rem;
  flex: 1;
`;

const DetailHeader = styled.h1`
  text-align: center;
  margin-bottom: 2.4rem;
`;

const TourDetailsWrapper = styled.div`
  min-width: 0;
  background-color: #f0fdfa;
  color: var(--color-teal-9);
`;

const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const AfterPrice = styled.div`
  text-decoration: none;
`;

const OrderButton = styled.button`
  border: none;
  color: var(--color-teal-0);
  background-color: var(--color-teal-6);
  padding: 0.8rem 1.2rem;
  border-radius: 1000px;
  cursor: pointer;
  font-size: 2.4rem;

  &:hover {
    background-color: var(--color-teal-9);
  }
`;

function TourDetails() {
  const { isLoading, tour } = useTour();
  if (isLoading) return <div>Loading...</div>;

  return (
    <TourDetailsWrapper>
      <WrapperTour>
        <Slider slides={slides} />
        <StyledDetail>
          <DetailHeader>{tour.name}</DetailHeader>
          <DetailInfo>
            <InfoWrapper>
              <FaRegClock /> Thời lượng tour: <strong>{tour.duration} ngày</strong>
            </InfoWrapper>
            <InfoWrapper>
              <FaUser />
              Số người tối đa: <strong>{tour.maxGroupSize}</strong>
            </InfoWrapper>
            <InfoWrapper>
              <FaMapMarkerAlt />
              Điểm bắt đầu: <strong>{tour.locations[0]}</strong>
            </InfoWrapper>
            <InfoWrapper>
              <FaMapMarker />
              {/* cut phần từ đầu tiên đi vì nó làm điểm bắt đầu */}
              Các điểm đến: <strong>{tour.locations.slice(1).join(' - ')}</strong>
            </InfoWrapper>
            <InfoWrapper>
              <FaDollarSign />
              Giá:{' '}
              <strong style={{ textDecoration: tour.discount > 0 ? 'line-through' : 'none' }}>
                {tour.price}
              </strong>
              <strong>
                {' '}
                {tour.discount > 0 && <AfterPrice>{tour.price - tour.discount}</AfterPrice>}
              </strong>
            </InfoWrapper>
            <OrderButton>Đặt tour ngay</OrderButton>
          </DetailInfo>
        </StyledDetail>
      </WrapperTour>
      <WrapperBooking>Lịch các tour trong tháng</WrapperBooking>
      <WrapperComment>Phần Comment</WrapperComment>
    </TourDetailsWrapper>
  );
}

export default TourDetails;