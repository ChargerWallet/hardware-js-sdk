import type { AddressTestCaseData } from '../../data/types';

export default {
  name: 'three-passphrase24-empty',
  passphrase: '',
  passphraseState: 'mv8SRcYZ8vcfWnx1KjtHeEYpiuXweaHm9y',
  description: '助记词详见 https://chargerwallethq.atlassian.net/wiki/spaces/CHARGERWALLET/pages/432046239',
  data: [
    {
      method: 'btcGetAddress',
      name: 'btcGetAddress-Legacy',
      params: {
        path: "m/44'/0'/$$INDEX$$'/$$CHANGE$$/$$ADDRESS_INDEX$$",
      },
      expectedAddress: {
        '0/A0': '1UDNS8rLn8AoeGk8fGn994DLbeDpoyQbT',
        '0/A2147483647': '17CsFKo4oiwevW7TkENCTAZjc5V4nzqn2B',
        '0/A1': '1DeUWau5p9MojvxaHS6orsdRJKeEYXo69z',
        '0/A2147483646': '17mcqgKUnzHEXkYXN5rpR3TZVCtGu64dQv',
        '0/A45656668': '17cdZom5YJY4j2nHcHm4r1CCCGLNv9AJwQ',
        '2147483647/A0': '1GuKMy9wuqdoxR9LeEC4s1aaDUSk5TQDde',
        '2147483647/A2147483647': '15rE9fovHdHXktwFY3m1geBtRugpvY7iyp',
        '2147483647/A1': '1nPpGW4yMmcquosgvEB71bDVjMFKXtRQE',
        '2147483647/A2147483646': '17H5r1UwHpBK2m7jP585s7YgVW18fjhYT5',
        '2147483647/A45656668': '1gYhhPPBFSnpviBFsTdhWLLb2HSuKDpRb',
        '1/A0': '1EDPHobcao4VFthL5A3KqibfswGJ8QWrbX',
        '1/A2147483647': '1GiXxsaZHXdLJ2Di6qM1bnEP8CyjwuEHHQ',
        '1/A1': '1QETbypJqaS9mHTPN2X9Sq7AQbpDrkgtv2',
        '1/A2147483646': '15dddBjnkW27kHG56Doj1vcWzmdRzqTFam',
        '1/A45656668': '1JTjns7E1YUtbys2dvfHoHZabNjb87eYYR',
        '2147483646/A0': '1mNFFUbC3SJDZHBZagR2cdZkQuGEFjD1J',
        '2147483646/A2147483647': '14BXM7vkB899dtiykebKBX7VDYGcX8tpFR',
        '2147483646/A1': '1CKwvbbXEzBHdqRE1K8L7Kp7GssFzUzxX9',
        '2147483646/A2147483646': '15z2KESb8eLuAt7oF6BhGeQc8uRdMAtPwa',
        '2147483646/A45656668': '1KJGD7SyQZ59o6m5hmmm8NmpReSvu4eeid',
        '8974594/A0': '1CVvzjt3kAcEzBGuWe8JdK6wEVexAszD6E',
        '8974594/A2147483647': '1Au5gSKLVdgh6zhSMVhE6jDestfZmNcSLv',
        '8974594/A1': '1LM6PbFd9ScQxNiLLDkJu6BXCUs6F73X4v',
        '8974594/A2147483646': '13EeBd8mApEw821pvKCD61ZoHCRWUquykp',
        '8974594/A45656668': '1HipiNA5wwprjcV9JabhPrN5hsXUF6YZFM',
      },
    },
    {
      method: 'btcGetAddress',
      name: 'btcGetAddress-Nested SegWit',
      params: {
        path: "m/49'/0'/$$INDEX$$'/$$CHANGE$$/$$ADDRESS_INDEX$$",
      },
      expectedAddress: {
        '0/A0': '3BzST7Grp5waBxh6h4XU9dwsXGbN6KEi7Q',
        '0/A2147483647': '3A1xUNNRY6BmkV1FVy6fZ1g27UTQKoBNJw',
        '0/A1': '3FCn2YszHH4UkYdGR9WN5MjGRuCTETt5b4',
        '0/A2147483646': '3AityrjBHB4RJWtUhEJs1d4JJyKDPt72KT',
        '0/A45656668': '37wcqk1kMQ9cLtqg6xsCW9M5feFoR2pGCX',
        '2147483647/A0': '33ZCEpM5hERjcBNbjh5mZubow1jD4CiUHd',
        '2147483647/A2147483647': '3LPz5Ggk6EoES3haBAmEhmrwnyPfTsQPLo',
        '2147483647/A1': '3HiQ21NX5DT3Jt23XG5Vu1QCswnfanNv5e',
        '2147483647/A2147483646': '3EAR2UDcv6QUQeomC2Vzaz2gq5Ndcbfgiz',
        '2147483647/A45656668': '3EEE4oKzEvhykqPWE8oyjVcnVTb6keVmGc',
        '1/A0': '36xR32gN1pLNGc62YuAffxTTVMXqv2r5dU',
        '1/A2147483647': '37e5foBnwiwVA4fNuUVe7mLsSn89p4BZ6A',
        '1/A1': '37hxvUhRx2hSUcx9R8iqp4AQCuD9a2Bjmj',
        '1/A2147483646': '38cuv8Jze2moJAoAzc1bPsNez6HU8tdgAe',
        '1/A45656668': '36pE8iyhqVD7BJMTaMxiHVRfyitMJ9QuGt',
        '2147483646/A0': '3CpoFVSkqiCQTVVzMjatppvD7zE2mpRCMT',
        '2147483646/A2147483647': '35vGD7WDEB5LGWpcDDfFVJCoLQkY6PAuVV',
        '2147483646/A1': '33gNfo3k1WfnEKB8S9kQ6nafRTTBMdm5zR',
        '2147483646/A2147483646': '37f5oRJyeSFp4eMmuVgsNmQ5juVngk4sap',
        '2147483646/A45656668': '3G9ZbwnBfC2sdWEvRmFWG2SdRzxiWGz6LW',
        '8974594/A0': '3F6SwLhn28NFquGk6UBaBkoQuPcr6xntW4',
        '8974594/A2147483647': '3Cgzy1uumxs7KUxqPMDgDWdkciYesEHJmY',
        '8974594/A1': '35i7da9P8d18ZZRSwAWfJSmxciYrqhoRZX',
        '8974594/A2147483646': '39FQUEfqGNwKk7771Uea4okkUNHbDEhmYF',
        '8974594/A45656668': '3BKYqgLaoVKTQ6H2kDiXh9gZwXys4jxUZg',
      },
    },
    {
      method: 'btcGetAddress',
      name: 'btcGetAddress-Native SegWit"',
      params: {
        path: "m/84'/0'/$$INDEX$$'/$$CHANGE$$/$$ADDRESS_INDEX$$",
      },
      expectedAddress: {
        '0/A0': 'bc1qmy2ea9p4ty8n95pfw0u72xm4qvg0xhmzn0hzts',
        '0/A2147483647': 'bc1qys2qexmclfn25el02sjkh94lmhv5gvm5scm0lt',
        '0/A1': 'bc1qx8jl62n0j8wtfjjl4vmspljnhhy922mred3l5q',
        '0/A2147483646': 'bc1qf8rq7lyq90hgqsd9zhcdndwmkml5t2eh38h96v',
        '0/A45656668': 'bc1qt70nqhgax685sqrme4quzlrtu5vax56lk226lf',
        '2147483647/A0': 'bc1qps5zuykc40x0aqwhzeg5ckw2avrnn09pty8r2e',
        '2147483647/A2147483647': 'bc1qkrse69lykkpva6ezxzr6mthqrpc7avx475gyz2',
        '2147483647/A1': 'bc1quxqes73r55tnnv05ptjze3nfd5ts3ymka3dacx',
        '2147483647/A2147483646': 'bc1q8rj0mwn5daasu3hmluf0ad7yvwe2p2zystaawm',
        '2147483647/A45656668': 'bc1qyk2mdfnayj85502ey8gy7kpfwucvgar06j5thu',
        '1/A0': 'bc1q90zvjgyskhqx7tev4r0gufk2ne33nhpqsylxp4',
        '1/A2147483647': 'bc1q6p4m8y2famwqn00rlyrsaac9zylv3sgnsp9f6s',
        '1/A1': 'bc1qu3xnrcswmzkjzxtqmv04qxuv6fm9zf3xet82n3',
        '1/A2147483646': 'bc1qmq9v6kpgtmredj30qg96cvex7r32093cdh6z3q',
        '1/A45656668': 'bc1qedzzs05vgexlhhq73zxckr89q6drj3ntzr4ddy',
        '2147483646/A0': 'bc1q0gxjdr9xfhwvggj5xxa7wp4u2lvm4twl0aa2jm',
        '2147483646/A2147483647': 'bc1qyegm6a04lvz5mnfph9l0wew8t9pqyxkqpy4uq2',
        '2147483646/A1': 'bc1q3vc5k9gh8nzszjf7f2pxwld9zzhg9zhvn63r4y',
        '2147483646/A2147483646': 'bc1q95gnehxs6953pfkj3z4p4j4znsk2v6sz9dm8mm',
        '2147483646/A45656668': 'bc1q29r6t7p5s7ld95tl9fzea6wrem85zm9m6uknnv',
        '8974594/A0': 'bc1qsa6ehcx9409w2ttaqphm6mc3e84kvaqc7xwu4t',
        '8974594/A2147483647': 'bc1qf89dk90p404tvqc9dt79xyfqvrunmhnqq2vhsu',
        '8974594/A1': 'bc1q2ll466ms8gd07cw65zvn2m8hjj70rwzu7dqs26',
        '8974594/A2147483646': 'bc1qmsx0luj28m9k6c4neh7z6m0kgc392c7leh52hy',
        '8974594/A45656668': 'bc1q9fmhkvqdg3s48wr4tep24mpz8ewyyyvdvdapga',
      },
    },
    {
      method: 'btcGetAddress',
      name: 'btcGetAddress-Taproot"',
      params: {
        path: "m/86'/0'/$$INDEX$$'/$$CHANGE$$/$$ADDRESS_INDEX$$",
      },
      expectedAddress: {
        '0/A0': 'bc1pg5qz70zeutk26rvskkvf7837dr4xmcj3m99jlwp8y59qy4ppkxvs9n33zs',
        '0/A2147483647': 'bc1pa0r8uf30kzseqsax75k2pngaw786tteyhe9h6a9dj445nx8xx9sq6mpe8y',
        '0/A1': 'bc1p7sc8yflmsekdheq27z9ggxnfhhyhlxk6fwuydc5wurjtm22qpwns9pjdva',
        '0/A2147483646': 'bc1pk3vnvfd7n6lr7cefw35gs493hm928dcgv37dcqt4f8k2r0n8znmq34gzu5',
        '0/A45656668': 'bc1patx57ssfxnhnzqrnpc6j3v92ra2ux8gtpf0a8wx475w293ujvnqs2hkqqy',
        '2147483647/A0': 'bc1ptcw99c79dfcl2ep2xq5an93auw8qnksktnl8g4wx7wg2x25ksjdqpc5z4d',
        '2147483647/A2147483647': 'bc1pj3cp8nu5zj2d9ysny380x8k8g2l5c42xhfqatym4sj5dppj7wxcqrwuynv',
        '2147483647/A1': 'bc1pjdwe92jyh5ze4fappf4gad8u3x5el4jkpl7q7ktphcqa68mms09szglpxx',
        '2147483647/A2147483646': 'bc1pfvtd9zkq3t94tmpwske3jt7p9ngh9w2wazlkh90pq5z4e4p9u6mq48ejhg',
        '2147483647/A45656668': 'bc1phz6yhtwuc8zcn8rh603rgn4c6knfgg29qp7jmd8ng2varv5pa5gqlvyplt',
        '1/A0': 'bc1pekmk4nl27krm5nvzwupzkauvulx2x7q2g6lghc29lc3jvnfgn0vqwmdta4',
        '1/A2147483647': 'bc1pppru8aj9q6n79uyxjt8tza284cgf7nwn36enw5u8w0qlz822dh2s025zqd',
        '1/A1': 'bc1pjf0rjkrsfsgcq6xtmfpvap336d2qhyrdy5dt2csfpp9yu04jcvuskepfl8',
        '1/A2147483646': 'bc1p30uhc4p9z83vn2qpm4fmpxhrcfqpzx42yujfsgz4qwvzr0q0vj5su493us',
        '1/A45656668': 'bc1py4sjga8dsjshme350dxmz7n3mslmm6mz8el0sv9agw7gs9qk6ypqzkggl8',
        '2147483646/A0': 'bc1pqarpsdpveks7uttfhg4pgwrlwp53v9al9fkewuu98m6a78yakqaq2v9ahh',
        '2147483646/A2147483647': 'bc1pjqxq4csk54jvcjs4cpurt5dq6a78xyel7t6ytat56ppk6gsvumwqq0499t',
        '2147483646/A1': 'bc1pcklplklgcpp6e9dakd6kptlrz5qfl3mulnp3xnlwnq6jmr92w9dq42llrn',
        '2147483646/A2147483646': 'bc1p6j8us4dlpup3msevrtq0md9kp2sv8ratvzljyemjwx5hd69vv0qq7997af',
        '2147483646/A45656668': 'bc1pw8cz74me48td4amfh6l7s37xw38zrj6thu6zf6tgrgehclqmeh7qhlrwqu',
        '8974594/A0': 'bc1ptl43tpz35c6qrq8653wftuvptaxplxwjfnjcpyegjwmzuc6099xsfhy034',
        '8974594/A2147483647': 'bc1pntn0pqke4awypm0slagdgx9t50kj4dwf4qfwr5pr205n6udelr7sl80dgq',
        '8974594/A1': 'bc1p8duav8329sedj22qf3u4rekhf836y6s4ffzk6l00t3h7kraxvv5q6trtrs',
        '8974594/A2147483646': 'bc1pry4d45rs3f7am8tylqmm0uee3f8vrx7jwvqxapqhlymf2u2as6cs5mcje5',
        '8974594/A45656668': 'bc1pr409sf0hexuy9rz9all2waanf3nhzgw7m8lsr92c86axs0cuyp9q54e57r',
      },
    },
  ],
} as AddressTestCaseData;
