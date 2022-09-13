import * as React from "react";

const Logo = (props) => {


  return(
    <svg
    width={159}
    height={80}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
    
  >
    <path
      d="M81.424 61.71h-1.95v-2.488h1.934c.49 0 .867.112 1.134.337.267.225.4.534.4.93 0 .815-.507 1.222-1.518 1.222Zm-.161-4.365h-1.788v-2.379h1.757c.97 0 1.453.397 1.453 1.19 0 .792-.473 1.189-1.422 1.189Zm.737 6.54c1.203 0 2.125-.265 2.771-.797.643-.532.965-1.274.965-2.222 0-.647-.2-1.216-.599-1.707-.398-.49-.939-.813-1.62-.97a2.505 2.505 0 0 0 1.42-.868c.363-.443.543-.998.543-1.666 0-.909-.314-1.607-.942-2.098-.628-.49-1.518-.735-2.668-.735h-5.127v11.063H82Zm-10.623-4.052h-2.828l1.422-4.068 1.406 4.068Zm-4.232 4.052.701-2.018h4.234l.701 2.018h2.91l-4.138-10.984h-3.147l-4.138 10.984h2.877Zm-3.323 0v-2.05H60.18v-9.013h-2.73v11.063h6.373Zm87.165-15.649v-6.79l4.569 6.79h2.73V37.172h-2.73v6.856l-4.569-6.856h-2.732v11.064h2.732Zm-9.968-2.394c-.895 0-1.604-.287-2.133-.86-.525-.573-.789-1.346-.789-2.317 0-.98.264-1.755.789-2.322.529-.57 1.238-.853 2.133-.853s1.606.287 2.133.86c.528.573.791 1.346.791 2.315 0 .971-.267 1.744-.799 2.316-.533.574-1.24.861-2.125.861Zm0 2.504c1.055 0 2.016-.242 2.883-.726a5.41 5.41 0 0 0 2.062-2.028c.506-.866.758-1.841.758-2.927 0-1.084-.249-2.056-.75-2.917a5.366 5.366 0 0 0-2.053-2.02c-.868-.484-1.834-.726-2.9-.726-1.054 0-2.014.242-2.883.726a5.412 5.412 0 0 0-2.06 2.02c-.506.861-.758 1.833-.758 2.917 0 1.086.252 2.061.758 2.927a5.398 5.398 0 0 0 2.06 2.028c.869.484 1.829.726 2.883.726Zm-7.252-11.174h-2.732v11.064h2.732V37.172Zm-6.947 11.064v-8.934h3.067v-2.13h-8.85v2.13h3.035v8.934h2.748Zm-10.415-4.052h-2.827l1.423-4.07 1.404 4.07Zm-4.234 4.052.705-2.018h4.232l.703 2.018h2.906l-4.137-10.984h-3.146l-4.136 10.984h2.873Zm-7.044 0 3.93-11.064h-2.922l-2.765 8.326-2.763-8.326h-2.924l3.914 11.064h3.53Zm-13.864-2.394c-.895 0-1.604-.287-2.133-.86-.527-.573-.79-1.346-.79-2.317 0-.98.263-1.755.79-2.322.529-.57 1.238-.853 2.133-.853s1.606.287 2.132.86c.528.573.792 1.346.792 2.315 0 .971-.267 1.744-.799 2.316-.534.574-1.241.861-2.125.861Zm0 2.504c1.054 0 2.016-.242 2.883-.726a5.409 5.409 0 0 0 2.062-2.028c.504-.866.758-1.841.758-2.927 0-1.084-.25-2.056-.75-2.917a5.366 5.366 0 0 0-2.053-2.02c-.868-.484-1.836-.726-2.9-.726-1.054 0-2.014.242-2.883.726a5.406 5.406 0 0 0-2.06 2.02c-.506.861-.76 1.833-.76 2.917 0 1.086.254 2.061.76 2.927a5.393 5.393 0 0 0 2.06 2.028c.869.484 1.829.726 2.883.726Zm-14.55-.11v-6.79l4.566 6.79h2.732V37.172H81.28v6.856l-4.567-6.856H73.98v11.064h2.732Zm-11.918 0v-6.79l4.57 6.79h2.731V37.172h-2.732v6.856l-4.569-6.856h-2.73v11.064h2.73ZM60.18 37.172h-2.732v11.064h2.732V37.172Zm32.108-4.474c.84 0 1.557-.145 2.147-.439.59-.291 1.038-.683 1.341-1.173a3.002 3.002 0 0 0 .457-1.611c0-.72-.166-1.306-.496-1.754a3.37 3.37 0 0 0-1.183-1.025c-.457-.234-1.048-.472-1.773-.712a21.97 21.97 0 0 1-1.15-.437 2.05 2.05 0 0 1-.663-.446.933.933 0 0 1-.264-.665c0-.324.1-.57.296-.737.197-.167.456-.25.775-.25.373 0 .667.107.887.32.218.216.354.504.406.87h2.957c-.096-1.022-.514-1.826-1.255-2.41-.74-.584-1.737-.876-2.995-.876-.776 0-1.466.128-2.068.383-.602.256-1.072.623-1.414 1.103-.34.48-.51 1.049-.51 1.705 0 .71.162 1.287.486 1.73.325.443.714.778 1.166 1 .453.226 1.037.458 1.75.697.49.168.871.311 1.15.43.276.12.509.275.694.463.186.188.28.422.28.703 0 .314-.102.564-.304.753-.202.186-.48.28-.831.28-.404 0-.737-.12-.998-.359-.26-.24-.413-.569-.455-.986h-2.906c.075 1.085.52 1.93 1.34 2.534.82.606 1.863.909 3.133.909Zm-8.388-.11v-8.935h3.067v-2.128h-8.848v2.128h3.034v8.935H83.9Zm-6.931-11.063h-2.732v11.063h2.731V21.525ZM63.085 32.588l1.823-7.401 1.804 7.4h3.386l2.7-11.062h-2.954l-1.47 8.012-1.98-8.012h-2.988l-1.98 8.012-1.455-8.012H57l2.7 11.063h3.385Z"
      fill="#2D4195"
    />
    <rect width={50.447} height={80} rx={5} fill="url(#a)" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.0036 .00222)" />
      </pattern>
      <image
        id="b"
        width={278}
        height={450}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARYAAAHCCAYAAAAq4uZ2AAAABHNCSVQICAgIfAhkiAAAGthJREFUeJzt3cuPXGd63/Hfc6pOUcKMRTlwBCQAu6p5wSQDerqb7CG7GzEQbrPzIvwDJkCALIKMkYxmzV26qRmNIXgMDOBg1qNF8h9IQAKRFCRLigU7GJki2QRsWGOItDQjUXU5TxanmmySfanqfurc6vvZSOxL9Uvp7V+9t/M+5u6u43p/VcNv/lFKRvJMkpnkkpuk4786gGgmmef/lLsskZS11D7xB9LF947/8kcOlv+7pMFvH0pyyaSIfAJQLhsPCiRT+u2Xpe99dLTXmTpYbpxS3xOZXM5wBGgsk8ll6lgmrd+f6nuTyb/0mgY3FzRwk5QRKkDD5b/jmQZuGtxckHRt4u+dbMTy/hkN+n0x2wHml5mUdjrSxduHf+1hwTK8tSDPWEMBkK/BWCK1L28f+HUHToX6t7qECoDH3F2eSf2bpw78un2DZfBOV5ZlhAqAp7i7zPOM2M+ewTK8cUpSxpoKgD3l2ZCNs+J5zwfLzUW5G3s+AA7kktxNurn43OeeCZarGviIrWQAE3G5Bj6SdPWpjz+1KzS40ZV7VnTbANScWaJ0/d7jPz8Zsdw6LR7sAXA0Ps6Q3ONg6WcjdoAAHIm7q5+NHv85D5a/6sqYAgE4BvNM+jBfyE0kafA7lmsBHI9LGjzKRy35iCUjVgAEGGeJ+V+e9cGjRxyGA3BsZlL6wgtq9x/12QwCEMJd6j/qK+GMLYBIJlfCsi2ASC5Xkt+mCwBRjKkQgFjGiAVAPFPCMX4Akdx9mlv6AWAyBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLgHAEC4BwBAuAcAQLJmKSjO6CCSVmVnYbUHGWmNKN+0o37slEf8HBzEyJG10F+zMzpWvbj/+cbmyL9yLsxyS5mZLO2j0pSegs2EOidH37uY+m6/fFLBrPMpOUJOqs3ct7R7p2TyQLnmbqbNzb97P55+gz2MUszxJJ5u6+8/HBzQV55vt+H+ZDkpjaa8+PVPYyfGdBmegz886Sp6fMT41n07VtJQnvQvMssclDRZLaG9uiy8y35JlQkfaYKLfXtpkWzSlTovYeayqHaa/fZyt6Xu3zRvTUVGi3wY0F7fMpNIyZxvPj6UNlt8HNBclddJv5YGZ7Lu5LByztp+vb4oxL81m+P3jsUJE0fg1jwDsHDgoV6ZA9Q8Kl2caZonTj+KGyI13flicJ+0UNdlioSBMcRkjX1wiXBjJJniTqrN0Pf+3O5XuES0PlobJ2+Nftt8bytCvqv3NbYluxEczypdbWERZqpzG6saBMYq2uMUydjTOS3jr0Kydcyn9LnVdOsFvUACZT4snMQ0XKgyvxhOeLmsAsz4AJQkWa5lz22U/UkTMtqjEzk7VMrY27hf3M1sZdWUv0mxozM3Xk0tlPJv6e6Q4frN9XevIl3n9qyEwya6l9ef9j+rPSvrwt43m0WjJJ6cmXpPXp1uImXGN5xvtnNOgPmDvXhEmyVlJKqOw2vNWVj3gAoC7MTGknlS7envp7j3Zc8uJtpa1vMbytAZNJSbv0UJGUtyFps+ZSA2amtPWtI4WKdNQRy45bp9UfDY787ZgtM5MsUbp2t+ymPGVwqytlzoi3wjqtVLr86ZG//3gPeFz+VJ3WC+wWVVB+TqVduVCRpPTyPXnSZtxSRWb57/QxQkU67ohlx7s99UcjjrlUhZk6iUkVmP4c6FZX/czFw0UVYVKn1ZIu3T32S8U8knrprjqtDmsuVWA2HsZWPFQk6fK9vK30m9KZmTqtTkioSJH3C166LXf6SNk6qUmXjrbgVopLt9XplN2I+WY2HjQG9pvQSzQ6G9uStRi5lMLUUSqt1mCk8qyL23nbWXUpnMkka+W/u4HCb+dJ1+5KSYsuUrBO64S0cbwFt1JtfJr/Heg4hTFJarVmssAfs3i7h+GNU3IZW4qzZqZOuyV9/07ZLYnxfk/9fsaC7oyZmUyu9pQnaic1s/sE8+sKxWGoGTKTOi+caE6oSNLFu+o4GwGzZDJZopmFijTj4jDt9W0lCaPbWchPRn5bWpn8wbDa2Pjb8cnushvSPOPSP2pfnu3T7TObCu3Wv9mVZTwjEsXMlL7YkpYbNFLZy4eLGnw9Yjod5MnlXrNf4C/kanWqLcYxM6XJieaHiiQt31GanKDfBNhdpbAIhdVsoNri8ZlJ6bd+X7rcwOnPfi5/ovTkSdZcji15XKWwmJ9WoHRtW0Z1qyMxmVJJ+t5HZTeleN/9WGnnFcLliCwxpevFnm8qZI3lWcObC8oo5TqVzr9sS705mP4c5O6i+n8/5Jm0KUxTLjf05xb+EzWutsjIZUKmzssnCRVJ6t1R5+RJsc84oZJCRSppxLKDaouHMFNnfbJb0efK+6vq9/+BkcsBJqn9M0ulFtylINr+TIk662siVPZw8T111tfpO/soO1SkkoNFIlz2Yokp3fiBpF+V3ZQK+5XS9f/Aye5nVCFUpJKnQk9c1eDGTaZFqk7HqJPBjVM8WqTxzuHGmqrwhlSRYJGotphPf9KNGl57UAGs101epbAIpU+FnpjzaotmhMoxpOtzfEZqyiqFRahQsGiOqy2aOkx/ji1d29a8bUWbaeoqhUWo0FRol78+r8HDf5qLSVGSSO212T2+Po+GN08py8puxeyZpPTlk9J3Py67Kc+p1ohlx3c/Vnqi+XdyJEoIlRlor91XYtXs2lHMTOmJTiVDRapqsEiNr7ZolqjNmsrMtNfvNXbN5bhVCotQzanQbg2rtmgmyU1p8OXF2NvgxoIkb9R29HGrFBahuiOWHQ2qtmj5XZ2ESoHS9W3JGtF9wqoUFqH6wSJJlz9Rp1XvOy7zpidKWVMpXP7fvOYXjZny34Ga3MVTj2CRal1t0SS5ir8TA0+k6/fkXtMHAIKrFBahPsEi1bLaopkpSeILQmF6nY1tJa16FdTL1+RUr+qWqluwaFe1xRq895hMiZlaMygIhaNpXb6rxKw2/WcWVQqLULtgkcbVFlvVrrZoMplJrQLvGcVkWmv3ZOaVDpdZViksQi2DRZLSy3dkpkoOa83yBwrbHNOvrPb6/bwaYPW6z+N2pZfre2tg9c+xHGJ4a0E+krwiDwCYJGub2pcIlToYvrMgr0zvGY90W7MvKDZrtQ8WSRqNL+cu+y9iZrJWonaNVu8hDd/tyUdZ6dcumJkSk1ol3VMbqbZTod1aa9vyJCl1xmwyqSVCpYbal+5KXm6d8fxAtjUiVKSGBIs0rrZo5RyCMklKW0qZ/tRWurEtpeVsCOQnsourUliExgSLpPEBtGL/SmaWH377fn0X2pBLv39HLithQyBp3OHJRqyxPGtwc0FeSEE0U8da0jqh0ig3FtX3kYq4JtWseaEiNTRYpGKqLXZM0jrP/jTSjVPqz/g3o6wqhUVo1FRot/Ysryk0UydpEypNtn5fnXZrds+PNDhUpAYHi5Qf/w+fL5up0+5Ia0x/Gu/S3fz/dXAfMjN1GhwqUoOnQruFlYYwqfOCSSvN7hR4xgcL6j/ykCWXeakb1egRy46Iaotmpk6SEirzaGVbnSQN6UPzECrSnASLJKXra0c+AGWS0s6Ltbi5CzNy+VOlnRePvGpnMqXra6FNqrK5mAo9MX21RZMp/T2T/rB5W4I4gr/qavDltE8XVatKYRHmZsSSe0udl1+aeDHOJKUnUkIFT/zhPaUn0slHLmZ5n5ujUJHmbsQyduOUBtKBN7ebmdKTL1W2bgtK9tfnNXj4xYEjFzMplebyWMKcjVjG1u8rPXly33cdMyntvEKoYH/f/VjpiVf2HfyapPTkybkMFWleRyw73j+jQX/w9Fa0mTr/oiX1OKeCCdxdVP/vR08Nf81MaSetdEGxWZvPEcuOZ6stmqnzz08QKphc707eZ8Z9qA5VCosw38EiSZf+RmnSzs+pdF6Rztajbgsq5Own6nReyUMlaUuX/qbsFpVuvqdCAGaCEQuAcAQLgHAECyaytPSazl/5ednNQE2wxoJD/at/s6Wvf5t3kxe/bfp//+fVkluEqiNYcKAzq5saDHYKCEsyqWUndOeDH5baLlQbUyHs6/zG6xoOpKce2nQpy77R+Y3Xy2oWaoARC/Z07sIb+ib76oAHwU0nWi/qk7/8z0U2CzWRdJc3y24DKub02p+qn319yO0Srn72lRYvXS+qWaiJheUtJe5Sd5nOgdzChS2Nvv5moqs83aVRP9N3lpkWIdddvi6552ss7pkWlrfKbhNKdmZ1UzbSdJcYufTIBzqzysh33i0sb8k9k7R78dZdvRXCZV71ll7TcDhlqIy5XMOhqXvpZzNoGeqgu7L51BPeT+0KZZmrx8hl7pxZua5M2YEXXx3G3eXf9HVmhWn1vOktb2k8UHnsue3mzKXeEuEyL3oXtzT0TDHlRF3DzNW7SP+ZF72lLe1VcHSPcyyuTK7eCnPmpjuzuikfHXxF57RcLh+JNZc50FvZVCbXXm9K+x6Qy1xMixqst/xTDQaKKeT2DHfXYCD1VpkWNVVveUuZ73+l+P4nbz3vID3mzI1zZuUnch/M/Of40HWaN6fG6a1cz8coB7wpHXik3yV5lql7gc7RFL2VTQ19GLKichh310iuLm9OjdG9sCXPskNHuoc+K5SHi+gcDbB44bqyLHZN5TDu+ZvT4sprxf1QzER3eVOeTbbMP9lDiHnv0JmVnxyvZShN98JrGmXZ4V84IyPP1OWcVG09/t2f8F1p4qeb3aVhNtTpCz89UsNQnt6FTWk0itlRPip3KWPNro5OX/iphtlwqpHuVNcmuKRhNuCcQo0sXNjKt5TLboierNktMC2qjd7FLQ2zwdT9Z/r7WFzykbTAVmLldS9sySacExfFJZlnrNnVwMLqdflIR+pAR7royd2lQcYhqArrrYwX2ip43Y67j48y0H+q6szqpjQ4fPdnP8e6QW4wlHqrPHhWNd2VLWWZit3+mZa7skxaYORSOQsXtjQc7H/4bRLHu5rSJR/0de7CG8d6GcTprlx/7oGwSss451Il5y68Mf3VGXs49p23Ltc32Vfq/tGfH/elcEz5U6Z7P7tRXS7PnMvGKqD7R3+ub7Kvjh0qUtRl2i75l1/o3Bojl7IsLG8q87qFyg6Xe8azaSU6t/aG/MsvwrpP3C39LvUffaXV1V+EvSQm013aqmeePCNzZ82lBEtLr6n/6KCL06cXWv7DXfrN4KEWr/wy8mVxgO7y9ZCha2VkWR6UKMTilV/q4TEv+dpLeF0hlyt78A+MXArQXd58fMdok7hcXaZFM7e6+gtln382kzemmRQsc5c+Gz7U1atvzuLlofFCbYMGKs9yd/UoTTMzV668rc+GD2c22p1dJUR33fr1HV27NrOfMLeeLNQ2W+bSAtOicNeuSbc/vzXTc04zLbHq7vqL/0nHiNSUhdrJubpLW7xBBSrid3L2tZvdqVkU4Nq1PFQatVA7IZfrf/yvTabWARaWtwo5kW2nvvffC+mpZonuffijIn5U41y58rZuf/6u5myo8jwznfn9S3rrrX9bdktqqcg3ptmPWMbcM1Enenqrq7/Qpw9uae5DRZLcdfvBu+w4HkF3ebPQ0W5hwSLlIzCqLU7u/NU39ZvBw0bv/kzNXb8ZPtC5f8cp70l1VzYL70OFBotEtcVJLV75pb749Z25XFM5jLv0zd99zUHMCexVpbAIhQeLRLXFw+wcXGKocgB3ZZ9/xrToAPtVKSxCKcFCtcX9nb/yc302eMBIZQIu12eDBzp/5edlN6Vyeitb+1YpLEJJwZKj2uLTzq29oS8f/LbsZtTOl5//ltsMd8mrFJbbhlKDRZ7nKTe3j+/CePRVJa+SrDqXazgw7gTS+EpSqfRpdLnBovH9p3NebfFfX/4zKfAujHnkcunLL/Wd1fmtfZVXKazGPcelB4u0q9riHJ5zObv0mn73ze/KfoNpBHfX18ORTq/9adlNKVxepbA6K3OVCBZJj4du81Rtsbf6Mw00Kn3Y2ijuGn39SAtzNAJ+UqWw3HbsVp1g0XxVWzy3tqVs2K9SX2gMl6TMdfZS8/vRUaoUFqFSwSLNR7XFxZWfqf9IjFRmyaVBf6DFleaWpzlqlcIiVC5YJDW62uLC6nWNsn4lFtiazl0aZX2dvfh62U0Jd/bi6/KRV2r6s1s1g0XNrLZ4+vtbsmFdb9KvK9dgNNBig3aLzqxuqj/sV3rAW9lg2TEcWCOqLXaXNzXqOyOVEri7ssFQZ5fqX4w+okphESofLC6vfbXF0xd+KpcxTimRS+pbpsUaH8aMqlJYhMoHi1TvaosLF7Y0HA1ZqK0Cd2VZVsut6MgqhUWoRbBIqmW1xcWLW7LalTxtNpdkmat3oT7TougqhUWoT7BIj6stLtVgrrxw8boyBiqV5C5lo5FOX6j+gu4sqhQWoV7BorxTPFRW6Ut+ekuvSSOvzbB1Xg2zYf7/qqJmVaWwCLULFmlcbbGil/wsLm8qs4yhSh245Bppcal6C7rnr745syqFRahlsEjjS34qVm2xu3xdmRuhUiMuKZOrW6GRy5Urb9f+WtLaBoukSlVbzC+sYvpTRy6XLKvEpWNFVCksQmF1hWbKTNsfvlraj19Yvi4pq90CG55hUsulOx/9uLQmFFVQbNbqPWLZUWK1xe54pEKoNIBLIzN1S1pzaUqoSE0JFklyV3e52A7RW9rKj+g3pDNAkrtcWeHXpeY1uZvTj5oTLBpXWyyoINrC0qZKKNeCgmSZF1Zcr+gqhUVoVLBIkmeu7ozLijwJr2Z1BuzmyjIfr5/NThlVCovQuGCR8vtzZ7XC313J7xbFnPBsvI4Wr7t8vZQqhUVoZLBIs6m2WFa5SpTLZ7B+11u53ugrNBobLE+qLcaES16usrkdAQdzz9Rbipli91a2lGWZmjyVbnCw5CKqLS6sXB+Xq8Q8y6RjH2voLV0vvUphERofLPn24dGrLXaXt6SM+Q/G3I9c/6q3sim3+Tie0Pxg0dGrLXaXtxo9D8bRuGvqNZcqVSkswlwEizRdtcVr1/Ih77x0AkzPPVN3eXOi59SqVqWwCM14VmgKZlLb2rr9wX/d8/NXr76pW7++Q6hgYmvfOa1f/erf7/m5Mys/0dCrV1Bs1uZmxLLjoGqLV668Tahgard+fUdXrrz93MerWqWwCHMXLNLe1RbPX31Ttx+8S6hgau6uTz+/pfO77gaqcpXCIszdVGg3M8nbiU688oL6f/fVXL6zII7JlPyzV9T64oEGo2oXFJu1dtkNKJO7pEFGqCCEy5U9+EwjOtN8ToWeRT9AFKbSOYIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUA4ggVAOIIFQDiCBUC4xMpuAYBGMUmJl90KAI3ikhIxZAEQyUyJnGQBEMilJDEmQwDiJOZK3NgYAhDHLVHSsRckFloAhDC90Epk7u7dpS25mBIBOB6T6d5Hr+YH5AgVABF29oISSbKXXiqzLQAaomUdSeNgufe//5OMdRYAx2Ay3fngh5J2PSvUevGEjGwBcARmUrrr0cPH//bpzf8isfUM4Cgs0d9+9N8e//GpJLl8rieGLQCmYpZnx+4PuftTW0KLKz9T5n0982EAeI6ZKbHO47WVHc/Nfe588EMlbpyZA3AwkxK350JF2ueipzsf/Wi8S0S6ANiL5btAH/1o788+OxXarbv8mqSMaRGAx8xMZtLdD17d/2sOChZJWli+LrlLnM4FIJPMtP3h3iOVHYfuL29/+COlqcvYLQLmmpkpTf3QUJEmvEz79ns/1g/++FXJOJ8LzBuTJDP94I9f1e33fjzZ9xw2FXrW+Y3X9eXXAynj0UWgyUySEtPvvZjq43f+ZLrvnTZYdiwtvaaHlj3+Mwu8QP3tXvJ42RN9tOs07VSvc9Rg2W119Rf6x8EX8mQkZSbJ5SYZ9+kCleXmym+mNSlxWdbSH6Qv6b33/uOxX/v/A1tBjEqZKnS4AAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>

  )
}



export default Logo;
