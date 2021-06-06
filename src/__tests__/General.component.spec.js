import React from 'react'; 
import ReactDOM from 'react-dom'; 
import nock from 'nock'; 
import { General } from '../components/profile/General.component';
import { render, screen } from '@testing-library/react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

// https://dev.to/softchris/http-mocking-for-your-tests-in-react-26f6 

Enzyme.configure({ adapter: new Adapter() });

const API_URL = "http://localhost:9999"

const endpoints = {
    USER_DETAILS : "/users/me"
}


const userDetailsOkResponse = {
    "email": "test@test.com",
    "firstName": "testeur",
    "lastName": "testName",
    "provider": "testProvider",
    "profile": {
        "carbong": 0,
        "level": 70
    },
    "inventory": {
        "id": 1,
        "maxSlot": 3,
        "items": [
            {
                "id": 1,
                "uuid": "15886530-5660-4fc7-ba09-7e4557f4447a",
                "unitPrice": 1,
                "levelRequired": 1,
                "mediaUrl": "https://wow.zamimg.com/images/wow/icons/large/inv_misc_rune_01.jpg",
                "maxStack": 2,
                "description": "Réinitialiser votre nombre de swipe pour la journée !",
                "isConsumable": true,
                "effects": [
                    {
                        "id": 1,
                        "name": "Pierre de foyer",
                        "description": "Réinitialise le nombre de swipe à 60."
                    }
                ],
                "itemTypes": [
                    {
                        "id": 1,
                        "name": "Divers"
                    }
                ]
            }
        ]
    }
}

const mockData = () => {
    userDetailsOkResponse
}

const api = {
    userDetailsOk : () => {
        return nock(API_URL).get(endpoint.USER_DETAILS).query({ details:"profile,inventory"}).reply(200, 
            mockData.userDetailsOkResponse,
        { 
            'Access-Control-Allow-Origin': '*', 
            'Content-type': 'application/json' 
          })
    },
    userDetailsUnauthorized : () => {
        return nock(API_URL).get(endpoint.USER_DETAILS).reply(401,
             {},
            { 
                'Access-Control-Allow-Origin': '*', 
                'Content-type': 'application/json' 
             }); 
    }
}


it('renders without crashing', () => { 
  const div = document.createElement('div');
  ReactDOM.render(<General />, div);
  ReactDOM.unmountComponentAtNode(div); 
});


it('container for inventory is initialized', () => {
    const wrapper = shallow(<General />);
    expect(wrapper.find('.container-inventory').length).toEqual(1);
})

it('userDetails must be called', () => {
    const wrapper = shallow(<General />);
    expect(wrapper.find('.container-inventory').length).toEqual(1);

    expect()
})

/*
it('should call user profile to get details (inventory, profile, items ...)', () => {
    const div = docum
})*/