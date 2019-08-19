export class Quote {
    showDetail: boolean;
    constructor( 
        
        public name: string,
        public author: string, 
        public upvotes:number,
        public downvotes: number,
        public submitted: Date,
        public submitter: string
        )
        {this.showDetail=false;}
}
