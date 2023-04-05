
import { Link  } from './link';
import { expect } from 'chai';
import Router from '../components/Router';
//import { sinon } from 'sinon';
import sinon from 'sinon';

describe('Link', () => {
  it('рендер', () => {
    const link = new Link ({ to: '/', label: 'test' });
   
  });

  it('span элемент', () => {
    const link = new Link ({ to: '/', label: 'test' });
    const element = link.element;
    expect(element.childNodes[0]).to.be.instanceof(window.HTMLSpanElement)
  });

  it('should go to passed route on click', () => {
    const link = new Link ({ to: '/' , label: 'test' });
    const spy = sinon.spy(Router, 'go');
    const element = link.element;
   
    console.log(spy.callCount)
    element.click();
    //console.log(element)
    expect(spy.called).to.eq(true);
  });
});



