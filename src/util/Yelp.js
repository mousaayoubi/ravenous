const apiKey = 'JhYH6JThpOYUWrqvZJReNiBN5AXpYnWxUwUa16iCQRedHipPf0joQl0Q4tSuW0TtgBagRWF-7qaR8c3uHkgvxiGltmfuH35iwEYEBYqRQ1YjSQe6p6pdtI2T-FLuXXYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {Authorization: `Bearer ${apiKey}`}
        }).then((response) =>{
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                console.log(jsonResponse);
                return jsonResponse.businesses.map((business) => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        })
    }
};

export default Yelp;