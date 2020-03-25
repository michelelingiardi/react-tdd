import React from 'react';
import { mount } from 'enzyme';
import NewRestaurantForm from '../../src/NewRestaurantForm';

describe('NewRestaurantForm', () => {
  describe('clicking the save button', () => {
    let saveHandler;
    let wrapper;

    beforeEach(() => {
      saveHandler = jest.fn(); // mock function (jest test duble)
      wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);

      wrapper
        .find('input[id="newRestaurantNameId"]')
        .simulate('change', { target: { value: "Sushi Place" } });

      wrapper
        .find('button[data-test="saveNewRestaurantButton"]')
        .simulate('click');
    });

    it('calls the onSave handler', () => {
      expect(saveHandler).toHaveBeenCalledWith('Sushi Place');
    });

    it('clears the text field', () => {
      expect(
        wrapper
          .find('input[id="newRestaurantNameId"]').props().value,
      ).toEqual('');
    });
  });
});
