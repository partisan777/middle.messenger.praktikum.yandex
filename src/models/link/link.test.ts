
import { Link  } from './link';
import { expect } from 'chai';
import Router from '../components/router';
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

  it('клик по ссылке', () => {
    const link = new Link ({ to: '/' , label: 'test' });
    const spy = sinon.spy(Router, 'go');
    const element = link.element;
   
    element.click();
    expect(spy.called).to.eq(true);
  });
});



