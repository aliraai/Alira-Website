export class PatnerDetails {

    constructor(private heading:string,
        private subheading:string,
        private title:string,
        private points:string[],){
            this.heading = heading;
            this.subheading = subheading;
            this.title = title;
            this.points = points;
        }
        
        public getHeading() : string {
            return this.heading;
        }
        
        public getSubheading() : string {
            return this.subheading;
        }
 
        public getTitle() : string {
            return this.title;
        }
        
        public getPoints() : string[] {
            return this.points;
        }      
}

// export class SetInfo {
// point1:string[] = ['Monthly Payouts',
//                       'Dashboard',
//                       'Earn 20% Of Your Referral\'s Payment',
//                       'Bonus Payouts For Milestone Referrals'];
// patner1 = new PatnerDetails("Referer","Referer/Consultant/Influencer","Lifetime Recurring Commission On All Sales",this.point1);
// }

export function setPatnerDetails():PatnerDetails[]{
    var point1:string[] = ['Monthly Payouts',
                      'Dashboard',
                      'Earn 20% Of Your Referral\'s Payment',
                      'Bonus Payouts For Milestone Referrals'];
    var patner:PatnerDetails = new PatnerDetails("Referer","Referer/Consultant/Influencer","Lifetime Recurring Commission On All Sales",this.point1);
    var patners:PatnerDetails[] = [patner];
    return patners;
}

  // point2:string[] = ['Show Clear ROI To Your Customers',
  //                     'Custom Features At A Discounted Price',
  //                     'Advanced Reports',
  //                     'White-Label Solution Available'];
  // patner2 = new PatnerDetails("Agency",
  //                             "Digital Marketing/Web Development Agencies",
  //                             "An Agency Partnership Programme Like Never Before",
  //                             this.point2);

  // point3:string[] = ['Reseller Dashboard',
  //                    'Exclusive Deals',
  //                    'Customized Plans',
  //                    'White-Label Solution Available'];
  // patner3 = new PatnerDetails("Reseller",
  //                             "Resellers/Channel Partners",
  //                             "Resell As If It Is Your Own",
  //                    