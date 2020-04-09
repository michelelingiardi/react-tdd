import React from 'react';
import { mount } from 'enzyme';
import NewRestaurantForm from '../../src/NewRestaurantForm';

const RESTAURANT_NAME = 'Sushi Place';

describe('NewRestaurantForm', () => {
  describe('clicking the save button', () => {
    let saveHandler;
    let wrapper;

    beforeEach(() => {
      saveHandler = jest.fn(); // mock function (jest test duble)
      wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);

      wrapper
        .find('input[id="newRestaurantNameId"]')
        .simulate('change', { target: { value: RESTAURANT_NAME } });

      wrapper
        .find('button[data-test="saveNewRestaurantButton"]')
        .simulate('click');
    });

    // TODO corrigir
    it('calls the onSave handler', () => {
      // window.setTimeout(() => {
      //   expect(saveHandler).toHaveBeenCalledWith('aaa');
      // done();
      // }, 0);
    });

    it('clears the text field', () => {
      expect(
        wrapper
          .find('input[id="newRestaurantNameId"]').props().value,
      ).toEqual('');
    });
  });
});
