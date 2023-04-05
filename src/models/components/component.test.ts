import { expect, assert } from 'chai';
import {propsWithChildren} from './components'
import { Component } from './components';


type testComponentData = {
  com_className?: string;
  com_el_id?: string;
  com_tagName?: string;
  com_isVisible?: boolean;
  newProps?: string;
  events?: object;
} & propsWithChildren;


  

class TestComponent extends Component {
  constructor(props: testComponentData) {
		super(props);
    this._element = this._createDocumentElement(props.com_tagName, props.com_className, props.com_el_id);
	}

}

describe('Component', () => {

	it('создание компонента', () => {
		const test = new TestComponent({
			com_className: 'test',
      com_el_id: 'elem_id',
      com_tagName: 'div'
		});
		const dom = test.element
    console.log(dom)
    expect(dom.className.trim()).to.equal('test');
	});


/*
  it('события компонента', () => {
    let testVar: string = '';
    const test = new TestComponent({
			com_className: 'test',
      com_el_id: 'elem_id',
      com_tagName: 'div',
      events: {
      click: () => {
        testVar = 'newTestVar'
      }
      }
		});
    console.log(test)
    test.props.events.click()
    // test.setProps({newProps: 'New value'})
    expect(testVar).to.equal('newTestVar');
  });
*/
	
  // it('установка нового пропса', () => {
  //   const test = new TestComponent({
	// 		com_className: 'test',
  //     com_el_id: 'elem_id',
  //     com_tagName: 'div'
	// 	});
  //   test.setProps({newProps: 'New value'})
  //   expect(test.props.newProps).to.equal('New value');
  // });

});


