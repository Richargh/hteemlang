import test from 'ava';
import {JSDOM} from 'jsdom';
import {evaluate} from '../src/hteemrunner.mjs';


test('returns standard html without modification', t => {
    // GIVEN
    const element = '<p>Hello, world</p>';
    const dom = new JSDOM(element)
    // WHEN
    const result = evaluate(dom.window.document);
    // THEN
    t.is(result.documentElement.outerHTML, '<html><head></head><body><p>Hello, world</p></body></html>');
});

test('returns then if this is not ht:nil or ht:false', t => {
    // GIVEN
    const element = '<ht:if> \
          <ht:this>I am truthy</ht:this>\
          <ht:then><p>I am returned</p></ht:then>\
          <ht:else><p>I am not returned</p></ht:else>\
        </ht:if>';


    const dom = new JSDOM(element)
    // WHEN
    const result = evaluate(dom.window.document);
    // THEN
    t.is(result.documentElement.outerHTML, '<html><head></head><body><p>I am returned</p></body></html>');
});



