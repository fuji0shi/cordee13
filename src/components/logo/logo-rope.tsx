import { cn } from "@/lib/utils";
type LogoProps = {
  className?: string;
};

//*$ Composant principal
export const Logo = (props: LogoProps) => {
  const { className } = props;
  return (
    <div className={cn(className)}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        // width="579.000000pt"
        // height="331.000000pt"
        viewBox="0 0 579.000000 331.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,331.000000) scale(0.100000,-0.100000)"
          fill="currentColor"
          stroke="none"
        >
          <path
            d="M0 1655 l0 -1655 2895 0 2895 0 0 1655 0 1655 -1354 0 c-1074 0
    -1355 -3 -1358 -12 -3 -7 -4 -23 -3 -35 1 -13 -7 -26 -22 -34 -13 -7 -23 -16
    -23 -20 0 -3 -12 -14 -26 -24 -26 -16 -26 -16 -19 7 4 12 20 39 35 58 40 52
    41 56 15 58 -15 1 -30 -7 -40 -21 l-17 -22 7 23 c6 21 4 23 -16 20 -19 -2 -25
    -11 -30 -40 -3 -22 -1 -42 5 -49 8 -9 8 -10 0 -6 -6 4 -30 -22 -55 -61 l-44
    -67 -3 39 c-3 38 6 57 84 164 16 22 16 22 -14 22 -26 0 -34 -6 -48 -35 -9 -19
    -19 -35 -21 -35 -3 0 -3 16 -1 35 l4 35 -1423 0 -1423 0 0 -1655z m3072 1550
    c-2 -14 -7 -24 -10 -21 -2 3 -18 -14 -35 -37 -42 -60 -44 -61 -44 -33 0 16 15
    43 39 71 45 51 57 56 50 20z m2 -52 c4 -10 4 -14 0 -10 -4 4 -16 0 -26 -10
    -23 -20 -24 -6 -1 19 20 22 19 22 27 1z m-168 -15 c-9 -13 -21 -33 -28 -45 -6
    -13 -15 -23 -20 -23 -4 0 -8 -8 -9 -17 0 -11 -3 -13 -6 -5 -4 11 62 112 74
    112 3 0 -2 -10 -11 -22z m161 -25 c0 -10 -5 -24 -11 -32 -8 -11 -8 -13 2 -7 8
    5 12 -2 12 -23 0 -19 -7 -34 -17 -39 -25 -13 -43 -4 -43 19 0 11 4 18 9 14 5
    -3 13 0 17 6 4 8 3 9 -4 5 -18 -11 -14 9 3 24 9 7 13 15 10 18 -4 4 13 32 20
    32 1 0 2 -8 2 -17z m-132 -37 c0 -36 -36 -76 -69 -76 -23 0 -20 7 27 60 23 27
    42 49 42 50 0 0 0 -15 0 -34z m76 -3 c-8 -15 -10 -15 -11 -2 0 17 10 32 18 25
    2 -3 -1 -13 -7 -23z m187 -23 c44 -27 56 -61 37 -105 -14 -35 -30 -51 -18 -18
    4 11 3 14 -5 9 -9 -5 -11 2 -8 28 2 19 8 41 12 47 4 7 3 9 -4 5 -5 -3 -13 0
    -15 6 -4 9 -6 8 -6 -3 -2 -31 -31 -17 -32 15 0 27 -1 28 -9 10 -4 -12 -18 -24
    -29 -27 -14 -3 -19 -1 -14 6 8 12 9 17 12 37 2 17 44 11 79 -10z m-190 -100
    c-6 -8 1 -3 15 12 14 15 31 28 38 29 25 5 77 -12 91 -29 11 -13 11 -15 -2 -7
    -9 5 -12 5 -7 -1 5 -5 13 -10 18 -10 5 -1 14 -2 20 -3 16 -2 7 -76 -10 -76 -7
    0 -25 16 -40 35 -18 24 -20 30 -6 18 11 -9 24 -17 30 -17 5 0 12 -8 16 -18 6
    -14 8 -12 8 9 1 16 -2 27 -6 27 -5 -1 -11 0 -15 1 -5 1 -12 4 -18 5 -5 1 -12
    4 -15 5 -3 1 -11 3 -17 4 -7 1 -12 7 -11 14 2 6 -4 9 -12 6 -9 -4 -21 -1 -29
    5 -27 23 -24 -3 5 -38 48 -58 50 -61 43 -61 -4 0 -15 7 -25 16 -13 12 -19 12
    -25 3 -5 -8 -3 -10 6 -4 9 5 11 4 6 -3 -9 -15 -46 7 -46 27 0 12 -3 12 -12 3
    -10 -10 -15 -7 -26 10 -11 19 -12 19 -7 3 5 -17 4 -17 -19 4 -14 13 -23 28
    -20 32 3 5 -6 5 -20 -1 -19 -7 -25 -6 -23 3 1 7 -4 11 -11 9 -8 -1 -11 2 -7 8
    3 6 10 8 15 5 5 -3 12 0 15 6 4 5 14 8 22 5 8 -3 12 -2 8 3 -11 19 20 17 51
    -3 24 -16 29 -24 22 -36z m-157 15 c32 -24 68 -63 69 -75 0 -8 -51 -5 -78 4
    -13 4 -20 12 -16 19 4 7 4 9 -1 5 -8 -8 -80 25 -90 42 -7 11 28 28 61 29 11 1
    36 -10 55 -24z m-90 -66 c16 -18 28 -37 26 -43 -7 -20 -67 -18 -103 3 -19 12
    -41 21 -47 20 -7 0 -2 -4 11 -9 26 -11 28 -23 7 -40 -36 -30 -48 31 -14 74 30
    38 81 36 120 -5z m63 -47 c3 -5 -1 -9 -9 -9 -8 0 -12 4 -9 9 3 4 7 8 9 8 2 0
    6 -4 9 -8z m103 -17 c0 -8 -4 -12 -9 -9 -5 3 -6 10 -3 15 9 13 12 11 12 -6z
    m103 -7 c7 -19 9 -20 9 -5 1 16 7 18 44 12 51 -7 117 -34 117 -48 0 -5 -7 -6
    -16 -3 -8 3 -13 2 -10 -3 3 -5 -12 -11 -34 -13 -26 -2 -40 1 -40 8 0 6 -7 17
    -15 24 -12 10 -15 9 -15 -6 0 -12 -3 -15 -8 -8 -4 6 -17 10 -29 9 -12 -1 -20
    2 -17 6 2 4 -15 14 -38 23 -41 15 -41 16 -10 13 18 -2 35 0 38 5 8 13 14 10
    24 -14z m-143 -5 c-3 -5 10 -8 28 -8 19 1 32 -2 30 -6 -9 -13 27 -19 44 -7 13
    10 14 10 4 -1 -6 -7 -9 -19 -7 -26 6 -15 -23 -28 -31 -15 -3 6 -15 6 -30 0
    -15 -6 -27 -6 -30 1 -4 5 -11 7 -16 3 -5 -3 -30 6 -54 20 -25 14 -42 20 -39
    14 5 -7 2 -8 -6 -3 -10 6 -10 10 3 20 18 13 111 20 104 8z m-95 -47 c41 -28
    47 -46 14 -46 -13 0 -28 5 -31 10 -3 6 -12 10 -18 9 -9 0 -8 -2 1 -6 15 -6 6
    -24 -11 -18 -7 2 -27 6 -46 9 -19 3 -41 12 -50 21 -15 15 -14 17 3 30 28 21
    101 16 138 -9z m518 -40 c-1 -17 -2 -18 -9 -6 -5 8 -8 18 -8 21 1 4 -7 17 -18
    30 -20 24 -20 24 8 0 15 -14 27 -34 27 -45z m-669 7 c8 -9 28 -24 44 -35 30
    -18 30 -18 5 -18 -14 0 -35 -3 -47 -6 -18 -5 -23 -2 -24 12 -1 18 -2 18 -6 1
    -5 -21 -22 -18 -37 6 -8 12 -5 21 8 36 23 25 39 26 57 4z m578 3 c11 -8 13 -8
    7 1 -4 7 6 5 23 -5 16 -9 28 -18 26 -21 -2 -2 0 -11 5 -21 6 -12 5 -23 -4 -35
    -15 -20 -36 -12 -35 13 0 14 2 13 9 -3 8 -18 9 -18 9 -2 1 12 6 16 14 11 6 -4
    8 -3 4 2 -11 11 -58 13 -50 1 3 -5 -4 -4 -16 2 -11 7 -21 14 -21 17 0 3 5 2
    10 -1 15 -9 12 4 -4 21 -9 9 -16 10 -18 3 -2 -7 -15 -6 -38 5 -32 15 -32 16
    -8 12 15 -1 25 1 22 5 -7 12 48 8 65 -5z m-343 -39 c8 3 14 -1 14 -8 0 -11 2
    -11 10 1 8 13 14 12 45 -4 50 -27 62 -51 27 -51 -15 -1 -30 4 -34 10 -5 6 -8
    3 -8 -7 0 -14 -5 -15 -30 -8 -16 5 -30 6 -30 4 0 -3 -13 4 -29 15 -38 27 -60
    27 -30 0 l24 -20 -29 17 c-26 17 -27 19 -10 31 10 7 26 13 37 13 12 0 17 5 14
    14 -3 8 -3 17 1 21 4 4 8 -2 10 -13 2 -14 8 -19 18 -15z m168 3 c4 0 4 5 0 11
    -4 7 2 9 17 7 13 -2 23 -9 22 -15 -2 -7 4 -10 11 -7 14 5 76 -33 76 -46 0 -13
    -48 -9 -54 5 -8 21 -26 19 -26 -2 0 -13 -2 -15 -8 -5 -5 7 -16 10 -25 6 -11
    -4 -19 0 -23 10 -3 9 -10 16 -16 16 -5 0 -6 -5 -2 -12 4 -7 -7 -3 -26 8 -18
    10 -35 24 -37 31 -6 16 59 21 73 6 6 -7 14 -13 18 -13z m-290 -52 c-4 -7 -3
    -8 5 -4 6 4 28 -3 48 -15 35 -22 35 -23 13 -31 -15 -5 -28 -4 -38 4 -13 11
    -14 11 -8 -1 7 -10 4 -12 -12 -7 -13 4 -24 2 -29 -7 -4 -8 -17 -16 -28 -19
    -11 -3 -27 -9 -36 -12 -11 -5 -18 -1 -21 12 -3 10 -13 19 -22 19 -15 0 -15 -2
    0 -18 9 -10 11 -19 5 -23 -17 -11 -41 34 -30 55 17 33 42 39 69 18 15 -12 18
    -17 8 -13 -29 10 -20 -6 9 -17 40 -15 52 6 14 25 -49 26 -37 42 32 45 19 1 26
    -3 21 -11z m391 -90 c11 -11 14 -17 6 -13 -9 5 -12 3 -9 -6 3 -8 11 -13 17
    -11 7 1 10 -2 6 -8 -3 -6 -11 -8 -16 -5 -5 4 -9 -1 -9 -9 0 -9 -4 -16 -10 -16
    -5 0 -10 5 -10 11 0 5 -4 8 -9 5 -9 -6 -26 22 -22 37 1 5 -3 6 -9 2 -6 -4 -7
    -12 -3 -19 4 -7 0 -3 -9 7 -11 11 -18 14 -18 7 0 -9 -8 -7 -25 4 -14 9 -25 14
    -25 10 0 -4 -7 -1 -15 6 -8 6 -20 8 -26 4 -8 -4 -9 -3 -5 4 4 7 1 12 -8 12
    -36 0 -13 19 27 22 57 4 148 -19 172 -44z m71 35 c7 -10 13 -25 13 -33 0 -12
    -2 -12 -10 2 -5 9 -16 15 -24 12 -8 -4 -12 -11 -8 -18 3 -6 -6 0 -20 13 -15
    14 -27 28 -27 33 0 16 63 8 76 -9z m-272 -42 c25 -10 46 -17 49 -15 2 2 4 -2
    4 -8 0 -14 -112 -19 -132 -7 -5 3 -23 9 -40 13 -23 5 -27 4 -15 -4 13 -10 13
    -11 0 -7 -15 4 -21 28 -9 37 20 14 103 9 143 -9z m263 -3 c-3 -8 -6 -5 -6 6
    -1 11 2 17 5 13 3 -3 4 -12 1 -19z m-410 -33 c43 -18 46 -18 37 -3 -4 7 -3 8
    5 4 6 -4 9 -11 6 -16 -3 -5 2 -13 10 -18 15 -8 15 -10 0 -22 -13 -11 -15 -10
    -9 4 7 19 -13 21 -50 5 -22 -10 -30 -8 -62 16 -34 26 -35 29 -18 36 29 11 41
    10 81 -6z m214 -38 c-8 -8 -11 -7 -11 4 0 20 13 34 18 19 3 -7 -1 -17 -7 -23z
    m-289 -12 c13 -17 9 -27 -9 -23 -9 2 -20 16 -24 31 -7 26 -6 27 9 15 9 -7 20
    -17 24 -23z m328 1 c0 -19 -57 -69 -69 -62 -18 12 -12 28 8 21 12 -4 21 0 25
    11 5 13 3 14 -7 6 -7 -6 -18 -7 -27 -2 -10 6 -3 10 24 15 27 5 36 12 32 22 -3
    8 -1 11 4 8 6 -3 10 -12 10 -19z m-161 -57 c-11 -16 -25 -29 -31 -29 -6 0 -5
    7 3 17 10 11 10 14 2 9 -18 -10 -16 9 2 28 9 8 22 13 30 10 12 -5 11 -11 -6
    -35z m210 -20 c1 13 4 22 7 18 10 -10 -7 -68 -18 -61 -6 4 -8 2 -5 -4 8 -11
    -1 -42 -12 -42 -4 0 -2 25 3 56 9 45 12 52 17 33 l7 -24 1 24z m-49 -45 c0
    -25 -4 -43 -9 -40 -4 3 -6 -5 -4 -17 3 -15 -6 -32 -31 -56 -48 -46 -46 -64 1
    -20 22 20 30 24 18 9 -26 -33 -48 -49 -57 -44 -5 3 -8 -2 -8 -10 0 -8 -4 -17
    -9 -21 -6 -3 -6 7 -1 26 5 18 7 47 4 64 -4 28 2 42 41 89 25 31 43 62 39 68
    -4 7 -3 8 4 4 7 -4 12 -27 12 -52z m-226 11 c-4 -8 -10 -15 -15 -15 -4 0 -6 7
    -3 15 4 8 10 15 15 15 4 0 6 -7 3 -15z m94 -16 c2 -22 -9 -49 -35 -90 -21 -32
    -40 -59 -43 -59 -11 0 -10 68 0 96 8 22 63 84 74 84 1 0 3 -14 4 -31z m50 11
    c-7 -10 -14 -17 -17 -15 -4 4 18 35 25 35 2 0 -1 -9 -8 -20z m-118 -6 c0 -8
    -5 -12 -10 -9 -6 4 -8 11 -5 16 9 14 15 11 15 -7z m266 -18 c-22 -35 -20 -43
    5 -20 21 19 21 18 -1 -19 -25 -43 -40 -55 -40 -33 0 9 4 16 8 16 5 0 9 13 9
    29 0 17 6 37 13 46 20 24 25 9 6 -19z m-171 -15 c3 -5 1 -12 -5 -16 -5 -3 -10
    1 -10 9 0 18 6 21 15 7z m-148 -45 c-1 -27 -6 -33 -20 -30 -15 2 -16 0 -7 -11
    8 -10 8 -15 -1 -21 -8 -4 -9 -3 -5 4 10 16 -17 15 -32 0 -20 -20 -14 0 14 48
    32 54 55 59 51 10z m309 -69 c-40 -80 -38 -55 2 37 15 32 28 53 30 47 2 -6
    -12 -44 -32 -84z m-176 37 c0 -8 -5 -12 -10 -9 -6 4 -8 11 -5 16 9 14 15 11
    15 -7z m228 -35 c-3 -15 -1 -26 4 -23 13 8 9 -14 -7 -49 -12 -24 -12 -28 -2
    -14 27 33 24 16 -11 -54 -20 -40 -38 -67 -40 -60 -2 6 1 17 6 24 6 7 16 26 21
    42 11 29 10 29 -5 10 l-16 -20 5 20 c2 11 8 29 12 40 7 20 6 20 -9 1 -9 -11
    -16 -29 -16 -40 0 -10 -3 -16 -7 -13 -10 10 48 177 59 171 6 -4 8 -19 6 -35z
    m-108 11 c0 -5 -5 -10 -11 -10 -5 0 -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z
    m-153 -22 c-6 -22 -6 -22 8 -4 14 19 15 19 15 -8 0 -17 -4 -25 -11 -20 -7 4
    -9 0 -5 -14 10 -29 -10 -36 -28 -11 -13 19 -13 25 0 50 17 35 29 38 21 7z
    m-94 -9 c4 -13 1 -19 -6 -17 -7 2 -25 -10 -42 -26 l-30 -30 30 18 c19 12 9 -2
    -28 -39 -32 -31 -61 -55 -64 -52 -17 17 52 118 100 147 18 11 33 20 33 20 1 0
    4 -9 7 -21z m247 -1 c-1 -22 -37 -95 -51 -104 -11 -6 -11 -5 0 9 12 15 12 17
    -3 11 -9 -3 -16 -10 -16 -15 0 -12 -27 -11 -35 1 -6 10 83 109 98 110 4 0 7
    -6 7 -12z m-262 -74 c-1 -5 -9 -9 -16 -10 -10 -2 -11 1 -1 12 12 14 24 13 17
    -2z m378 -51 c-18 -33 -21 -26 -6 13 6 15 13 24 16 21 3 -3 -1 -18 -10 -34z
    m34 -67 c-5 -5 -10 -15 -10 -20 0 -6 5 -4 10 4 9 13 10 13 10 0 -1 -20 -60
    -98 -61 -79 0 8 -2 22 -4 32 -3 14 1 17 13 13 15 -5 15 -4 -1 8 -16 13 -16 17
    10 72 l27 59 8 -39 c5 -25 5 -43 -2 -50z m-460 15 c0 -24 -39 -64 -57 -57 -8
    3 -27 -3 -43 -14 -39 -28 -44 -25 -23 11 32 55 123 100 123 60z m-72 -86 c-6
    -13 -14 -22 -18 -20 -11 7 -31 -20 -22 -30 4 -5 1 -5 -7 0 -8 4 -17 2 -22 -6
    -4 -7 -11 -10 -15 -7 -6 7 75 88 88 88 4 0 3 -11 -4 -25z m562 -12 c0 -5 -10
    -19 -21 -33 -11 -14 -18 -18 -15 -10 3 8 9 23 12 33 6 17 24 24 24 10z m-548
    -36 c-12 -13 -22 -29 -22 -36 0 -7 -4 -10 -9 -6 -5 3 -13 0 -17 -6 -4 -8 -3
    -9 4 -5 15 9 15 1 1 -25 -6 -12 -17 -18 -25 -15 -8 3 -12 2 -9 -3 3 -5 1 -12
    -5 -16 -6 -4 -7 -11 -4 -17 4 -6 3 -8 -3 -5 -5 3 -27 -8 -49 -26 l-39 -32 23
    33 c13 17 29 32 35 33 7 0 4 4 -6 8 -16 6 -14 11 20 49 21 24 56 54 78 67 51
    30 53 30 27 2z m561 -32 c3 -27 -1 -44 -14 -59 -10 -12 -25 -30 -34 -41 -14
    -19 -15 -19 -5 8 5 15 17 41 26 58 8 17 13 33 11 35 -2 3 -16 -19 -30 -48 -19
    -37 -25 -44 -20 -23 5 25 23 62 50 108 8 13 12 4 16 -38z m-582 -48 c-10 -9
    -11 -8 -5 6 3 10 9 15 12 12 3 -3 0 -11 -7 -18z m565 -54 c-14 -20 -26 -33
    -26 -28 0 16 40 78 46 72 3 -3 -6 -23 -20 -44z m-2656 20 c-159 -7 -320 -7
    -320 0 0 4 87 6 193 5 105 -1 163 -3 127 -5z m123 0 c-7 -2 -21 -2 -30 0 -10
    3 -4 5 12 5 17 0 24 -2 18 -5z m115 0 c-15 -2 -42 -2 -60 0 -18 2 -6 4 27 4
    33 0 48 -2 33 -4z m705 0 c-123 -2 -323 -2 -445 0 -123 1 -23 2 222 2 245 0
    345 -1 223 -2z m405 0 c-32 -2 -84 -2 -115 0 -32 2 -6 3 57 3 63 0 89 -1 58
    -3z m552 -2 c0 -7 -462 -4 -485 4 -5 2 101 4 238 4 136 1 247 -3 247 -8z
    m3099 4 c-7 -6 -2200 -7 -2207 -1 -3 3 493 6 1103 6 610 0 1106 -2 1104 -5z
    m-2335 -50 c-9 -14 -18 -25 -21 -25 -5 0 5 18 20 38 17 22 18 13 1 -13z m-610
    -8 c-3 -7 -37 -39 -75 -71 -37 -33 -67 -61 -65 -63 2 -2 18 10 37 26 18 17 37
    27 42 24 6 -3 7 -2 4 3 -3 6 3 15 14 22 10 7 19 8 19 4 0 -11 -36 -43 -85 -76
    -33 -21 -36 -26 -18 -26 34 0 130 -39 162 -65 15 -13 40 -52 55 -86 24 -52 27
    -69 21 -116 -9 -70 -26 -111 -62 -144 -40 -38 -66 -49 -112 -49 -23 0 -41 -5
    -41 -11 0 -6 17 -9 41 -8 31 3 43 -1 51 -15 11 -19 88 -214 88 -222 0 -6 -60
    -5 -113 2 -42 6 -46 9 -52 42 -4 20 -20 64 -35 99 -24 54 -33 63 -54 63 -14 0
    -26 5 -26 11 0 9 -58 39 -76 39 -3 0 -4 -57 -3 -127 l4 -128 -75 -3 -75 -3 -3
    223 c-2 244 3 317 21 299 16 -16 27 -14 27 5 0 12 10 14 53 12 l52 -3 3 -97 3
    -98 73 0 c40 0 88 5 107 11 42 14 81 49 75 66 -3 6 7 22 22 33 25 20 25 21 5
    17 -21 -5 -37 15 -38 48 -1 19 -32 54 -61 70 -38 20 -180 21 -187 1 -3 -7 -15
    -16 -26 -19 -12 -3 -19 -1 -15 4 3 5 3 9 0 9 -2 0 -12 3 -21 7 -14 5 -16 2
    -10 -15 4 -13 2 -22 -4 -22 -6 0 -11 5 -11 10 0 7 -7 7 -21 0 -41 -22 -50 -7
    -47 77 l3 78 118 3 c102 2 117 1 117 -14 0 -34 26 -5 46 52 16 47 31 67 72
    101 47 39 89 49 76 20z m658 -27 c0 -17 -6 -47 -13 -68 -10 -31 -13 -34 -19
    -17 -4 12 -1 32 7 48 7 15 12 27 10 27 -10 0 -57 -81 -57 -97 0 -12 -3 -14
    -11 -6 -7 7 1 33 28 86 38 78 57 87 55 27z m-1708 -127 c63 -22 106 -61 134
    -122 22 -50 25 -72 29 -216 5 -147 3 -165 -17 -219 -27 -70 -80 -132 -135
    -157 -51 -24 -180 -26 -233 -4 -81 34 -151 134 -165 236 -4 30 -1 41 18 59 20
    19 22 26 13 53 -6 18 -17 37 -24 43 -16 13 -13 125 5 183 27 87 94 141 177
    141 27 1 60 7 74 15 26 14 58 11 124 -12z m-962 -2 c57 -24 111 -86 133 -150
    24 -74 19 -81 -65 -81 -59 0 -72 3 -76 18 -20 64 -34 81 -76 93 -49 13 -77 2
    -110 -42 -16 -21 -21 -49 -25 -146 -11 -224 9 -279 102 -289 47 -6 52 -4 83
    27 18 18 30 39 28 46 -13 33 5 43 80 43 l74 0 0 -32 c0 -48 -42 -130 -84 -165
    -46 -38 -96 -53 -172 -53 -79 0 -118 12 -162 51 -77 68 -103 145 -101 304 1
    71 5 113 12 117 9 6 9 8 0 8 -12 0 -10 38 9 108 12 49 73 118 128 144 49 24
    165 24 222 -1z m2733 -1 c11 9 19 10 23 3 9 -13 43 -13 59 -1 16 13 88 0 134
    -23 39 -19 96 -78 108 -113 22 -57 22 -63 1 -69 -20 -5 -29 -37 -10 -37 6 0
    10 7 10 16 0 35 25 4 28 -34 3 -43 -4 -52 -26 -30 -9 9 -12 8 -12 -5 0 -10 8
    -17 20 -17 18 0 20 -7 20 -81 0 -144 -45 -248 -129 -297 -45 -26 -51 -27 -228
    -30 l-183 -4 0 206 0 206 33 -7 c17 -3 38 -10 45 -16 9 -7 11 -6 6 7 -7 17 4
    19 45 7 23 -6 23 -7 22 -144 l-2 -137 83 0 c93 0 117 10 145 63 24 44 22 309
    -2 361 -23 49 -69 68 -152 64 l-68 -3 -3 -92 -3 -93 -35 0 c-28 0 -35 3 -30
    15 6 17 -9 21 -19 5 -3 -5 -17 -10 -29 -10 -32 0 -36 20 -36 167 l0 121 73 9
    c59 7 74 6 83 -7 10 -12 14 -12 29 0z m1283 -52 l-3 -63 -157 -3 -157 -3 -3
    -89 -3 -90 40 -1 c22 -1 88 -1 148 -1 l107 1 0 -59 0 -59 -92 0 c-51 0 -117 0
    -145 0 l-53 -1 0 -88 0 -88 152 -3 c84 -1 153 -3 154 -4 1 -1 4 -27 6 -57 l3
    -55 -237 -3 -237 -2 -6 52 c-8 67 -3 188 8 188 19 0 47 -22 41 -32 -4 -6 -1
    -9 7 -6 8 3 15 12 17 21 2 12 -1 15 -12 11 -12 -4 -15 -2 -10 9 4 11 -3 17
    -25 22 l-31 7 0 74 c0 68 2 74 21 74 11 0 17 5 14 10 -4 6 -10 8 -15 5 -15 -9
    -20 26 -20 141 0 95 3 114 15 114 8 0 15 5 15 10 0 6 -5 10 -11 10 -5 0 -7 5
    -4 10 4 6 95 10 241 10 l235 0 -3 -62z m800 55 l122 -6 0 -52 c0 -46 -3 -53
    -22 -59 -36 -9 -88 -7 -88 4 0 7 -7 7 -21 0 -12 -7 -55 -10 -102 -8 l-82 3 -3
    -92 -3 -93 146 0 146 0 -3 -62 -3 -63 -142 -3 -143 -3 0 -79 0 -80 160 0 160
    0 0 -65 0 -65 -235 0 -235 0 0 196 0 196 25 -6 c14 -4 25 -2 25 4 0 5 -11 10
    -25 10 l-25 0 0 165 0 165 113 0 c63 0 169 -3 235 -7z m152 -883 c0 -7 -895
    -10 -2665 -10 -1770 0 -2665 3 -2665 10 0 7 895 10 2665 10 1770 0 2665 -3
    2665 -10z m-2730 -335 l0 -195 -35 0 -35 0 0 161 0 161 -25 -5 c-19 -3 -29 1
    -36 15 -14 26 -4 34 51 46 87 19 80 36 80 -183z m266 177 c50 -40 59 -109 20
    -145 l-24 -22 24 -28 c31 -36 33 -103 4 -140 -44 -56 -136 -56 -180 0 -23 30
    -27 73 -6 73 8 0 22 3 30 6 12 5 19 -2 27 -25 9 -25 17 -31 39 -31 28 0 40 15
    40 50 0 26 -27 50 -56 50 -20 0 -24 5 -24 28 0 23 6 30 35 41 58 21 60 92 3
    99 -18 2 -27 -4 -36 -23 -8 -18 -18 -25 -28 -21 -9 3 -22 6 -30 6 -24 0 -15
    40 15 71 25 24 38 29 78 29 30 0 56 -7 69 -18z"
          />
          <path d="M2860 2904 c0 -8 5 -12 10 -9 6 4 8 11 5 16 -9 14 -15 11 -15 -7z" />
          <path
            d="M3135 2800 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0
    -12 -4 -9 -10z"
          />
          <path
            d="M3220 2719 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
    -5 -10 -11z"
          />
          <path
            d="M2990 2584 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0
    -10 -7 -10 -16z"
          />
          <path d="M3101 2564 c13 -17 26 -30 28 -27 3 2 -8 16 -24 31 l-28 27 24 -31z" />
          <path d="M3165 2601 c-3 -5 -2 -12 3 -15 5 -3 9 1 9 9 0 17 -3 19 -12 6z" />
          <path d="M3165 1989 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z" />
          <path
            d="M2647 1453 c-14 -13 -6 -33 13 -33 11 0 20 4 20 9 0 13 -26 32 -33
    24z"
          />
          <path
            d="M2243 1183 c9 -9 19 -14 23 -11 10 10 -6 28 -24 28 -15 0 -15 -1 1
    -17z"
          />
          <path
            d="M2325 1130 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
    -7 -4 -4 -10z"
          />
          <path d="M1437 1543 c-10 -9 -9 -63 1 -63 4 0 8 16 8 35 0 38 0 38 -9 28z" />
          <path
            d="M1396 1531 c-4 -6 -2 -11 5 -11 8 0 8 -4 -1 -15 -7 -9 -8 -15 -2 -15
    14 0 22 24 12 39 -5 9 -10 10 -14 2z"
          />
          <path d="M1466 1505 c-9 -26 -7 -32 5 -12 6 10 9 21 6 23 -2 3 -7 -2 -11 -11z" />
          <path
            d="M1394 1431 c-49 -30 -64 -82 -65 -229 -2 -186 18 -242 94 -263 50
    -13 112 5 140 42 39 54 39 378 0 421 -45 49 -115 62 -169 29z"
          />
          <path d="M1676 1414 c-9 -23 -2 -28 13 -10 7 8 8 17 3 20 -6 3 -13 -1 -16 -10z" />
          <path
            d="M1245 1320 c-3 -5 1 -10 9 -10 9 0 16 5 16 10 0 6 -4 10 -9 10 -6 0
    -13 -4 -16 -10z"
          />
          <path d="M1623 1260 c0 -25 2 -35 4 -22 2 12 2 32 0 45 -2 12 -4 2 -4 -23z" />
          <path
            d="M1640 1020 c0 -6 7 -10 15 -10 8 0 15 2 15 4 0 2 -7 6 -15 10 -8 3
    -15 1 -15 -4z"
          />
          <path d="M395 1531 c-3 -5 -1 -12 5 -16 5 -3 10 1 10 9 0 18 -6 21 -15 7z" />
          <path
            d="M450 1530 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
    -4 -4 -4 -10z"
          />
          <path
            d="M540 1490 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
    -10 -4 -10 -10z"
          />
          <path
            d="M570 1480 c0 -11 4 -20 9 -20 5 0 7 9 4 20 -3 11 -7 20 -9 20 -2 0
    -4 -9 -4 -20z"
          />
          <path
            d="M385 1480 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7
    -4 -4 -10z"
          />
          <path
            d="M306 1465 c-3 -8 -1 -15 3 -15 5 0 11 7 15 15 3 8 1 15 -3 15 -5 0
    -11 -7 -15 -15z"
          />
          <path
            d="M410 1470 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
    -4 -4 -4 -10z"
          />
          <path
            d="M650 1473 c8 -3 19 -11 23 -17 6 -7 7 -6 4 4 -2 8 -12 16 -23 17 -13
    2 -15 1 -4 -4z"
          />
          <path
            d="M297 1421 c-8 -31 7 -45 27 -26 9 9 14 21 11 26 -9 14 -17 11 -10 -3
    4 -7 0 -5 -8 5 -14 17 -15 17 -20 -2z"
          />
          <path
            d="M376 1416 c3 -9 2 -16 -4 -16 -6 0 -13 6 -15 13 -4 7 -6 8 -6 1 -2
    -21 23 -33 36 -19 10 10 9 16 -3 26 -12 10 -13 9 -8 -5z"
          />
          <path
            d="M305 1210 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
    -8 -4 -11 -10z"
          />
          <path
            d="M280 979 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
    -5 -10 -11z"
          />
          <path
            d="M320 939 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
    -5 -10 -11z"
          />
          <path
            d="M3576 1474 c-9 -23 -8 -24 14 -24 23 0 26 13 6 29 -11 9 -15 8 -20
    -5z"
          />
          <path d="M3621 1304 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z" />
          <path d="M3258 963 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
          <path
            d="M4445 1530 c-3 -5 1 -10 10 -10 9 0 13 5 10 10 -3 6 -8 10 -10 10 -2
    0 -7 -4 -10 -10z"
          />
          <path d="M4225 1289 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z" />
          <path
            d="M4266 1212 c-3 -5 1 -9 9 -9 8 0 15 4 15 9 0 4 -4 8 -9 8 -6 0 -12
    -4 -15 -8z"
          />
          <path
            d="M4180 1200 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
    -4 -4 -4 -10z"
          />
          <path d="M4228 1193 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z" />
          <path
            d="M4226 1125 c-3 -8 -1 -15 4 -15 6 0 10 7 10 15 0 8 -2 15 -4 15 -2 0
    -6 -7 -10 -15z"
          />
          <path d="M4220 1021 c0 -5 7 -11 14 -14 10 -4 13 -1 9 9 -6 15 -23 19 -23 5z" />
          <path
            d="M5160 1170 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
    -4 -4 -4 -10z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
