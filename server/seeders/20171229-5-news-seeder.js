'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('News', [
      {
        id : 1,
        title: 'A Boy\'s Scream, a Door Ajar and 12 Dead in a Bronx Fire',
        image_icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBQ7Pi0O4s9BuTzT1cc3_ND384kger1ojG5F6Q-06iID-2VypJWb-MAfU7-b7iNspvJPq_sNkr5wc',
        image: 'https://static01.nyt.com/images/2017/12/30/nyregion/30fire41/merlin_131701202_a728ad84-9e4d-40a5-afd1-720d2b3dda30-superJumbo.jpg',
        description: 'The 3-year-old boy in the kitchen screamed. His mother ran in from the bathroom. He had been playing with the knobs of the stove again. With flames jumping through the kitchen, she scooped up the boy and a 2-year-old child and ran into the cold. She left her first-floor apartment door ajar behind her.',
        category: 'top',
        source: 'New York Times',
        zone_id : 1,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id : 2,
        title: 'At least two dead, including shooter, in workplace gunfire in Long Beach',
        image_icon: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRy9HryuvmmJDPOIX37lSCbYDgeo5QVubYEPx5SNkOUIzMFfoFhma8Dypayfzba7YF4H_he8pYJOA',
        image: 'http://a.abcnews.com/images/US/WireAP_c130c97c10704b26a24be45d666e768e_12x5_992.jpg',
        description: 'Authorities say a man walked into the Southern California law firm where he worked and shot two men before turning the gun on himself. Long Beach police Sgt. Brad Johnson says officers found the gunman and one victim dead when they arrived on Friday. They learned that a third victim had already driven himself to a hospital. There was no further word on his condition. Johnson says police didn\'t fire any shots. A SWAT team searched the rest of the building and no other victims were found.',
        category: 'top',
        source: 'ABC News',
        zone_id : 1,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id : 3,
        title: 'A police officer fatally shot a man while responding to an emergency call now called a \'swatting\' prank',
        image_icon: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTupL-hkWF0a-f4_QPEJFSCcKHcYZ3oWwy2ACXOty3CKc7kxwjaQZIdCQx-XxAEugeAwxUbYY8RozI',
        image: 'https://www.washingtonpost.com/resizer/ezZ-0D25ik0wxeGPNyLQUkg3QK4=/480x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MWWZW56PZI5JRNPCFUYOMOV7VE.jpg',
        description: 'A police officer in Wichita fatally shot a man while responding to an emergency call that authorities now say was a tragic and senseless prank. The 28-year-old man, whom officials did not immediately identify, was killed around 6:20 p.m. Thursday after police responded to a report that there had been a shooting and hostages taken at the house, Deputy Wichita Police Chief Troy Livingston said at a Friday news conference. “Due to the actions of a prankster, we have an innocent victim,” Livingston said, calling it a case of “swatting.”',
        category: 'top',
        source: 'Washington Post',
        zone_id : 1,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id : 4,
        title: 'Iranian protests: World is watching response, US warns',
        image_icon: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRWUK0Oa6dkLGiY4XVgZnHGPkfH-v547LGCG0a6q5WwuzIDwNknw_URfpr6Oh4toteqnpV2Rh3yVxM',
        image: 'https://ichef-1.bbci.co.uk/news/624/cpsprodpb/3AFD/production/_99410151_iranprotest.jpg',
        description: 'The US says "the world is watching" how Iranian authorities respond to anti-government protests that have broken out in several cities.',
        category: 'top',
        source: 'BBC News',
        zone_id : 1,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id : 5,
        title: 'What to do with the Powerball winnings',
        image_icon: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkkbpZ6au-qz-ApjWwfwA6FBV2CD3qY-M3tN06edsrxVLcjUWz_0LfVfg-tA_MTvMVYtXCqgwxDn4',
        image: 'https://cbsnews2.cbsistatic.com/hub/i/r/2017/08/25/41a6e7da-6213-4fd1-9b4d-9a9f71626c36/thumbnail/640x360/91979074ca9884094ed9d5da57c8e831/0825-ctm-powerballwinner-duncan-1382470-640x360.jpg',
        description: 'Any winners of the lottery drawings this week will face an urgent question: Accept the $300-million jackpot a little bit at a time or in a lump sum? The answer probably comes down to this -- it depends what you want that money to do for you. More specifically, what\'s your financial personality, and what time horizon do you have for investing the prize and realizing future gains?',
        category: 'top',
        source: 'CBS News',
        zone_id : 1,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('News', null, {});
  }
};