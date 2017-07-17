import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './pothole-view-model';
export function navigatingTo(args: EventData) {
    
    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}
