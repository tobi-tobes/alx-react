import encoding from 'text-encoding';

const decoder = new encoding.TextEncoder();

// Now import the Adapter
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { jsdom } from 'jsdom';

configure({ adapter: new Adapter() });

const documentHTML = '<!doctype html><html><body><div id="root"></div></body></html>';
global.document = jsdom(documentHTML);
global.window = document.parentWindow;
