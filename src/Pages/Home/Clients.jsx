import React from 'react'
import person1 from '../../assets/HomeImgs/Person1.webp'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const ClientSList = [
  {
    id: 1,
    name: "Rajesh Kumar",
    designation: "Production Manager",
    review: "Kartavya's custom labeling solutions have streamlined our production process. The quality is outstanding and delivery is always on time.",
    image: person1,
    rate: 4.5
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    designation: "Production Manager",
    review: "Kartavya's custom labeling solutions have streamlined our production process. The quality is outstanding and delivery is always on time.",
    image: person1,
    rate: 3
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    designation: "Production Manager",
    review: "Kartavya's custom labeling solutions have streamlined our production process. The quality is outstanding and delivery is always on time.",
    image: person1,
    rate: 5
  },
]

// Helper function to render stars
const renderStars = (rating) => {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const totalStars = 5

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />)
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />)
  }

  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0)

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-500" />)
  }

  return stars
}

const Clients = () => {
  return (
    <section className='py-8 sm:py-12 space-y-8 md:space-y-16'>
      <div className="bg-primary text-4xl sm:text-5xl font-bold text-white w-8/12 sm:w-1/2 lg:w-[35%] 2xl:w-2/5 text-center lg:text-right lg:px-10 py-3">
        What Our Clients Say
      </div>

      <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {ClientSList.map((client) => (
          <div
            key={client.id}
            className='flex flex-col space-y-4 sm:space-y-5 justify-center items-center text-center'
          >
            <img src={client.image} alt={client.name} className=" object-contain" />
            <h1 className="text-2xl md:text-4xl font-bold">{client.name}</h1>
            {/* <p className="text-lg md:text-2xl">{client.designation}</p>
            <p className="text-lg md:text-2xl">{client.review}</p>
            <div className="flex gap-1 text-xl">
              {renderStars(client.rate)}
            </div> */}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients
