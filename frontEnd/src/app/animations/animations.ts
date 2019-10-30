import { trigger, state, animate, transition, style, query, keyframes, stagger, group } from '@angular/animations';


export const Animations=[
  trigger('move-photos', [
    transition('*=>right', [
style({transform:'translateX(100%)'}),
query('.btn-read-more', style({transform:'scale(0.2)',opacity:0, background:#fff})),
query('.txt-read-more',style({opacity:0})),
query('.line-down',style({left:'100%'})),
query('data-photo',style({opacity:0,transform:'translatX(20%'})),
group([
  animate('1000ms, 500ms cubic-bezier(0.23,1,0.32,1)',style('*')),
  query('.btn-read-more',animate('600ms 1200ms cubic-bezier(0.25,0.46,0.45,0.94)',keyframes{[
    style({opacity:1,transform:'scale(1)',offset:0.8}),
    style({background:'transparent',offset:1})
  ]))),
  query('.txt-read-more',animate('300ms 1200ms cubic-bezier(0.25,0.46,0.45,0.94)',style('*'))),
  query('.line-down',animate('300ms 1200ms cubic-bezier(0.25,0.46,0.45,0.94)',style('*'))),
  query('.data-photo',animate('300ms 1200ms cubic-bezier(0.25,0.46,0.45,0.94)',style('*'))),

  ])


    ]),
    transition('*=>left', [
      style({transform:'translateX(-100%)'}),
      style({transform:'translateX(100%)'}),
query('.btn-read-more', style({transform:'scale(0.2)',opacity:0, background:#fff})),
query('.txt-read-more',style({opacity:0})),
query('.line-down',style({left:'100%'})),
query('data-photo',style({opacity:0,transform:'translatX(-20%'})),
group([
  animate('1000ms, 500ms cubic-bezier(0.23,1,0.32,1)',style('*')),
  query('.btn-read-more',animate('600ms 1200ms cubic-bezier(0.25,0.46,0.45,0.94)',keyframes{[
    style({opacity:1,transform:'scale(1)',offset:0.8}),
    style({background:'transparent',offset:1})
  ]))),
  query('.txt-read-more',animate('300ms 1200ms cubic-bezier(0.25,0.46,0.45,0.94)',style('*'))),
  query('.line-down',animate('300ms 1200ms cubic-bezier(0.25,0.46,0.45,0.94)',style('*'))),
  query('.data-photo',animate('300ms 1200ms cubic-bezier(0.25,0.46,0.45,0.94)',style('*'))),

  ])


    ])
    ]),
    transition('*=>void',[
      style({'z-index':0}),
      animate('1500ms',keyframes([
        style({opacity:0.5, offset:0.3}),
        style({opacity:0, offset:1})
      ]))
    ])
  ]),
  trigger('see-more',[
    style({opacity:0}),
    query('.detail', style({opacity:0, transform:'translatY(180px)'})),
    query('.twitter,.facebook',style({transform:'scale(0)'})),
    group[
      animate('300ms', style({opacity:1}))
      query('.detail',stagger(50,[
        animate('600ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',style('*')))
    ]))
  ]),
  query('.twitter',animate('200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',style('*'))),
  query('.facebook',animate('200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',style('*')))
    ])

]),
trigger('show-thumbs',[
  transition('void=>*',[
style({background:'rgba(51,51,51,0)'}),
query('.item-photo',style({transform:'translateY(100%)'})),
query('detail-photo',style({left:'-50px'})),
query('.number-photo',style({opacity:0,transform:'scale(0)'})),
query('.item-photo-selected',style({transform:'translateY(-100%)'})),
animate('300ms',style('*')),
group([
  query('.item-photo',stagger(40,[
    animate('800ms 100ms cubic-bezier(0.165,0.84,0.44,1)',style('*'))

    ])),
    query('detail-photo',stagger(40,[
      animate('400ms 600ms cubic-bezier(0.165,0.84,0.44,1)',style('*'))

    ])),
    query('.number-photo',animate('300ms',style('*'))),
    query('.item-photo-selected',animate('800ms 100ms cubic-bezier(0.165,0.84,0.44,1)',style('*')))
])

  ]),
  transition('*=>void,[
    group([
      animate('200ms 300ms',style({opacity(0)})),
      query('.item-photo',stagger(40,[
        animate('400ms 00ms cubic-bezier(0.165,0.84,0.44,1)',style({transform:'translateY(100%)'}))
    ])
  ])
])
]),
trigger('anim-list',[
  transition('*=>*',[
    query('.grilla',style({transform:'translateY(30px)',opacity:0}),{optional:true}),
    query('.grilla',stagger(20,[
      animate('300ms cubic-bezier(0.175, 0.885, 0.32, 1.275), style('*'))
    ]),{optional:true})
  ])
]),
trigger('anim-admin',[
  transition(':enter',[
    query('.options',style({height:'0px'})),
    query('.options', animate('400ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',style('*'))
  ]),
  transition(':leave',[
    query('.content', animate('400ms cubic-bezier(0.6, -0.28, 0.735, 0-045)',style({opacity:0,transform:'translateY(40px)'})),
    query('.options', animate('400ms cubic-bezier(0.6, -0.28, 0.735, 0-045)',style({height:'0px'}))
  ])
])
]
