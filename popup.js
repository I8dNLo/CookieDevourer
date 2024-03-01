const prompt =`
You will get an input as a cookie-name and cookie-value pairs.
These would be taken from a website that I am visiting. You will go through these pairs and return as a structured JSON object the output containing values for each cookie: “cookie_name ”, “description” and “severity”. Use the example below as a reference:



Examples:

INPUT:


{


Zalando-Client-Id:
bef8a4ee-1e2f-4cef-a9b1-90f0286db260
_ga:
GA1.2.1270046060.1687101739
liveagent_oref:
https://www.zalando-lounge.de/
liveagent_ptid:
76cf9d72-e071-41d1-90b9-463d242d15e0
_gcl_au:
1.1.1911225440.1703272279
zl_secsub_closed:
true
liveagent_sid:
f189b153-de7f-468c-9bc1-1193f039efbe
liveagent_vc:
11
_fbp:
fb.1.1709031710263.2134203836
zl_customer:
eyJnZW5kZXIiOiJNQUxFIiwicm9sZSI6InVzZXIiLCJmaXJzdE5hbWUiOiJTb2hhaWIiLCJsYXN0TmFtZSI6Ik11bmF3YXIiLCJoYXNoZWRDdXN0b21lck51bWJlciI6IjRhMjIwODc4OWFlNzMxNGFkZDJmMWRlYWI4ZDg2MDllIiwibWFpbENvbmZpcm1lZCI6ZmFsc2UsImNvdW50ZWRfY3VzdG9tZXJfb3JkZXJzIjoxLCJwcmVmZXJyZWRfY291bnRyeSI6bnVsbCwiZW1haWxQcm92aWRlciI6ImdtYWlsLmNvbSIsImNoZWNrc3VtIjoiODMzZTcyMGUxMzNkNjg3MzgzMjAxYTU1Yjg5MjZkZDY4OTIzOWQ4YjM3NmEyMTgzYmE4MGZmNmNmNzJhNTk1NCIsImlzU29mdExvZ2luIjpmYWxzZX0=
zl_webviewos:
false
zl_webview_ga_cid:


zl_webview_appversion:


zlac:
AAEAAE7rn_cuIeiLGg63XkT-Gt_O4YAVQd37ALHr0qbgp4ZzBbU1B67Dj0wZtV0zU7TrfpZhSALSwHEZVvAV1ZaNJU2qTxSZyZskyXRHDu-qoZKd-wiX3QAHca_PCBjrYveK2PsREQzSgOUGRAmm4N4d19LsjKpAI_mAAecJewK1SS8iI6bJWOgOFAyBkn3-FBDvNPTbv_SjJJL_phFsrhUbfONfQGaFfR5FJz_4glwzmEPws88pj9SQHjKAAd7wHLQipcaiwT7MJgcBgh4smUi0FAUyrwe5HFPUaZcy5E6ecwKcns8JO00Op2VFzi6Ugx8wnqq92uUlzlFe0s9SCr-w9Sr-JWP2UhaUVjT5yLBb_x6-Zxe3C9v4KCPIct7Vjig9WAcAMtjdR6KnWITukj195miiaobODpuZh33uwx0asb_sg0uc7DNzX0N3AIytilB6pTT0BBZIa3uIbSWx8hI5XveSoG2WzAO8of7YFxU8J3_doYXcH0BTjP4-hTQs2MWHHOifDAQIdUg2ENTDqaxPhLorhLF0-QOeYRkhSoosnJYWGx6-ZmSjnHPDP7Mdb7xh4yhUJd6dWFMxCvubjUdKAIFF-e4DaZpcFNe-vJtQM2mmJxeBTZWCxoet2HitQR6n9vrXUr3c-LSy6OUdfMKTPChjs4EqsZ7p-auuGfgaZtzV1-YBaTNv3XsLSWEWEr50oEgz0OY2Nn6QWKagIqO_qG_7oPn-G3-uLpbFBxuyjLFZUTVEhizUcHvFnNm8l1ga3bQKV53tFShH532XxisNXV1g42sexVmxDx50rCm7oKhG5xw9-R8kXNbGKve_FYmfw2lcb83A6e3AJlLTgMSJ0F78yGWNCIPSlLu1NUgPz9ojBItylVy0LuvXd6Q2Y3AlD5STr3CMuq4tXhHN4UXcvVjSEHbCzQvuteTvfjYPe7vvUL7eDIrwe30FFqzDPbt5FQkIEETw6jZn5MchtLyaog00XdW0Hl0mH5rgQ1eiO56lojXy7niloPXtX4MhS-wCp8rLF6JEEo9fm4_SU6jJmNvKuZe9or98UCQLEBoUqxWgcAFq_nfjTxyQZTekwb1r3b71PsQLYRLjvKsziqQ0pIRKfNV1mBaE-FOQ6P7167whCl5SG4qzqBlixpis4PD9MFVLkrrTlEDDK-N-CCNUbFvsuP1ywBok_TjTkjuSCIppgfB3nR0c_GrMMG5FNeGRMEjT8pG-2wygQNZ2vBUk2tTK2cK6Gp1VmOLb3w6nxkL8v7dsxohptBjBy35wHD3brsshAB7v2swdzXWEsMV6MbDrYSEBoGntPuYdYoGp-j-6_zh24f0PhtL3iZwe6NQxQr9vJ1SwITvB486-LpCexSGoZQ1KECqfiPdwSaXwa3ka9T4VKmYW4iBKrQ3uNFHY7NJtSHX-H1XcXNonROuzBYtzhR6rkCixM2k1dTKCB24me1Kklh5WsTTbbmF956_nV_5WtL5uQ97xY_rOjGmkueCJG1B_Tcp0LHEwYUD90Ig-AFdwq4Q7UNtCHLfNxiRWpcCwEPIXtDVlxkUZxVtIukx3R5Tuh1iEIalY3mKGQA2_CnK2epcZaS-sMKcVT1EP4BdjEPAn5S9UGCPSD37IPSFTauPv3tsjVf3teEMmYjp7PoyznzO24CLBD5NaOGSuSaPf3IUotEwDuby8KkBi6qHhFKjezso_sswTG6Ti8XfyQi61H79Q_Hl4gyWpxuqiBBi0HsCzpzTln5pxBOeVCMweaO6ISjDXDz1JMoUuGDTVUGC7Z5LWSJm5Nzu1HLr1V-XFD6nt9cbP-yEhhsZIt4IEh9QTvTkFYKB2QJRwJdezP5SxDlbw-xEzrfr2-5_VFDNtSemsHt-HsdmHovxwexyv5SYaVhpMAVIqzqCabXO55EP5hwYFaOWSUceYOUZTm4NNsGi1VyjIL5jtoCZFERrr0CkYUvhAJ3XP9G7JFRVu3mL0qtIPXSSJfg8Iu3j18ZR6pfTyCJow0YatTwkxcmRXOw_bb91DD_Ocl4L4qOQQLG8war5q-8YA-hxvVxioh5heT2SecRjKOlpMIKFFtwdw-Xv3-Uvd8iKTKM3R-8RqszArqTaD5VDK8Z1qsJKUDZPbjEyKfD_W-4UPv2ZNCrPUhcR8fieJc1QIMbOgiUJ2N27PCdl1tcKR6NVH39Dx1c8suQ6fRnb0VcVbH3RLPrLVfh3bv4cD-kc_CiIWFwfKggagwXy0qpT1XE6pI6xlktAzhWMMQgaB4qZ414QvH0deKfU6Y_CqHPbAzlYSttZzDxBrN-GEHl7ciyYlYWtAd3OV4Fa2VkmrEIEjiZB4Pyx5BTTv-0zKfys3PsL2pf1QsT1VgRvSJFFLWPeFeGA-CZAotMNuneABDrJnH6hNwkqeqtK78fUmZWuO8FtT71kQV8cQRLOR-
3CMXbu3xVJpKL5guff1Yck_nXX23lazN_1zxnk_Bn5HOpzH-DR8s31X3qxrp5FFtDrF-2ZDakONhqUTh5tSyPn6wCLWkaWI7BzNqTV8TluK9gX9H1mQjyU2BgkbvFNo-a9zJ_CWxdxyiXszQRXCUBqKl8jsC4o4n9XgMk5qqEGbBuMjivosJbYVLUmVHFK1df-vjhQJWcSgWHebhiin855CcR9Fn2JhNoIe2_jBYNEH_CDNgIB7rygfD45Km_kqpo97kfifekLXGneJvZ2jNodFFvkcTdKIC1A126P_GKNND47D8W8UAAfydwy_tqrh5v69AuDV8W1tk4X5P_hW0UP69dTLj_DlGk2qV_BK_nC9Iro26yk4hHWXzFDqvtY5AfyxQRs_gR_9z2OMNIZgxhctREaBpm-te8i5MDcrGDceoGF3hDTsw0o-7fFsoyAqiK4i0lnjZHFuJ0k2Y0njSH7SSOIW6FGRZmXFK5p0lWaEpB-vSay7AQtg_wZLY5M_RB74caG9pymx_cHmiroMl7sc2X5vKhEd66tjVHfDaWO5s5rAD0mGNYfypT2e4GGMnLQi-ckRC9TbH0up0vruJq-qHYiKy0XT1tsLN6K6AJ95XnVLG6J8L-ydwBnagzXjqizq6NmCvku8xSwY_pn9Z8b2TBikPzHMWyWxMkwUSDgyWwvh1aAZK5LS4pfTSCZElNFWxFCHaC1apu5FaQRGuYGDzfyDKv70mM4vgPca7oTlsBkzEkdvKxJk4TC1yWao8r6O4LyFfpjvhpLfJpGAOrP7GHaUnRa95kitgKvSTBK-w-8krsPZ36SvpSoRKHMSjIFV_cm0tTjdSmgEwaH_mvLfssDFIab91ZsC-JzemuuaTsbR1j-rbZNEJbQiuXJgSFmRFIPNsn61iyrw3o_frr-G9KTGwmbpDWW6S2c1-1IFpEf_sHhJvS9-UIC90DrLuR6TQNSqkN3QMmGkCoOviuF2meQKoK5ie9lcjO2__6vNIoeQeGHX3aMssvIGLofv22MYXILj-tQWPGdhLs-qyTBEzcjDlF1WUimB27KpZM9M5CFVbh33zElma7WWdoWIhw8FTxNYmOgP2ci9EbcgBC9nhyKAm9WujPCvtp2IL23KVf6Og9brRw04bDYD8raA5BE2o3J4Pzy02KWKv-AiOcoU9xCnG5kHv-xtHsCIJ3eEYItzudv5W1eOMa92FRdP70258XuJBcRwPKl4OhJ7yF5Jcsnj_wNc9RzZ2iIXJu0=
frsx:
AAEAAMb5yZkOefkBwbnWl3G2HTST8uPFVKNmlr6JTlkHrP-FjyEONaYlOLxm0J9BvtIo7LauQgFFf-lFFZ-DW2NMbTubU4Lc1pNeRp7oggUjzMtnBqTXSXCvoQpMflpZtoqf0NcX6oKxBHihlCl7ZQHnGEkU24vieypNj0V740nBlxzjW1Pcp9hdQ7UXXBTT_4aYPqjSpwg35LdAABRgK0E=
isSSOFlow
true
_abck:
D39555AFC653D382285A0665A1197AC0~0~YAAQetU+F2VX6e+NAQAAWrku9gvkHuhWRLyG63ZEEvXqeP0a33AT4hV6ydroyBIi7n2aHQQUXaHgXgxIGAye7wkrSGhyL0zCCQjSDqI3zKlDIJxyZBfJsjfg50dcgA8mdkzete4dF0PakiXXxy4nYTSDRG36IHuoRsz5/AH3eiU7HkxY6IcDFuYOtrVCGKl6Q8EaBaVIBTNXWZYoGweK7Vwk2Xa9NGYkKzuc2T7hmNn/WTG/UIGk97klKz3U/a3pMV3XzytrBI/77yLJrHcV/lFsfBJkYC4/pKaf5b3Y7RrkMaa8jtzKwkiS0BcUGkjIXhJc6USQ5c5rKUSyxgKpClkKFRa+MdRLDhO34S+UnoUbt1vmHHWlf7ZjJFUnlSW7/epxM9M1KjF8yGDefQ76DOuHxxOJ174sgmIIjqaghWsPoJ7/VjkUD57Q3n70iXcJniGY9Gexk9XNvvoqKAc6Yp6sm31c1ANlugrwQXwbW9BwK6Ps9zWUjw==~-1~-1~-1
bm_sz:
9D435AE082F72554D2B9A3F694754387~YAAQetU+F2hX6e+NAQAAW7ku9ha71NkzkFHZF/4uhJkMIBIZpeferfrb2ZIH0la+3rYm2Ej/nZ9uiWr6S2y/MUwupR+yOfCtGPlPSATOiUESs0BZ/1aTjSuFWSfbX+lRJKe6g+9qQKuzPLgtd2u83LhSdhs0XU98R22u8cZOvMaooRPblbpitbFSLqfOESMsraubHGbBe2qiyYsGic3JRWKu58On5yJf8w/H0w7LdiAsEHnWp6Hc2ylFc/5MLdEyN/6UTsn9rBCaw0izg28Qv03CRfPHkGRDt6di0tCuJWBlFrA85rqMoSDSsuvW00HkKsr12M6zWAc6aEoFJgv3jNkqd+T4izPX4Ww9fd8nSD8S6WHTdOo/hj7WtNi9oPOhxUO1S3ci5Irypze+L5U5P+efK3pYZhaEXiu2m5a8uMMO98zg68DdmJIal0aDKZ0M9/F9ej+VY7zRpHeVUQ==~3290946~3228214




}




OUTPUT:




[
   {
       "cookie_name": "Zalando-Client-Id",
       "description": "Cookies are used to remember users' login state, allowing them to navigate and access restricted areas without re-entering credentials.",
       "severity": "Moderate"
   },
   {
       "cookie_name": "_ga",
       "description": "Cookies can be used to track users across multiple websites, building a profile of their interests and behavior without their consent.",
       "severity": "Severe"
   },
   {
       "cookie_name": "liveagent_oref",
       "description": "Cookies are used to remember users' login state, allowing them to navigate and access restricted areas without re-entering credentials.",
       "severity": "Moderate"
   },
   {
       "cookie_name": "liveagent_ptid",
       "description": "Cookies are used to remember users' login state, allowing them to navigate and access restricted areas without re-entering credentials.",
       "severity": "Moderate"
   },
   {
       "cookie_name": "liveagent_sid",
       "description": "Cookies are used to remember users' login state, allowing them to navigate and access restricted areas without re-entering credentials.",
       "severity": "Moderate"
   },
   {
       "cookie_name": "liveagent_vc",
       "description": "Cookies are used to remember users' login state, allowing them to navigate and access restricted areas without re-entering credentials.",
       "severity": "Moderate"
   },
   {
       "cookie_name": "_gcl_au",
       "description": "Cookies can be used to track users across multiple websites, building a profile of their interests and behavior without their consent.",
       "severity": "Severe"
   },
   {
       "cookie_name": "known_customer",
       "description": "Cookies are used to remember users' login state, allowing them to navigate and access restricted areas without re-entering credentials.",
       "severity": "Moderate"
   },
   {
       "cookie_name": "isSSOFlow",
       "description": "Cookies are used to remember users' login state, allowing them to navigate and access restricted areas without re-entering credentials.",
       "severity": "Moderate"
   },
   {
       "cookie_name": "is_braze_experience_checkout",
       "description": "Cookies store user preferences, such as language or theme choices, to personalize the website experience.",
       "severity": "Safe"
   },
   {
       "cookie_name": "block_braze_card_repetition",
       "description": "Cookies store user preferences, such as language or theme choices, to personalize the website experience.",
       "severity": "Safe"
   },
   {
       "cookie_name": "coupon",
       "description": "Cookies remember items in a shopping cart, allowing users to leave and return to the site without losing their selections.",
       "severity": "Safe"
   },
   {
       "cookie_name": "zl_customer",
       "description": "Cookies store user preferences, such as language or theme choices, to personalize the website experience.",
       "severity": "Safe"
   },
   {
       "cookie_name": "zl_secsub_closed",
       "description": "Cookies store user preferences, such as language or theme choices, to personalize the website experience.",
       "severity": "Safe"
   },
   {
       "cookie_name": "_gid",
       "description": "Cookies can be used to track users across multiple websites, building a profile of their interests and behavior without their consent.",
       "severity": "Severe"
   },
   {
       "cookie_name": "zlac",
       "description": "Cookies without secure attributes or sent over non-HTTPS connections can be intercepted and used to hijack user sessions.",
       "severity": "Severe"
   },
   {
       "cookie_name": "frsx",
       "description": "Cookies that do not have proper CSRF protections can be used to trick a browser into executing unwanted actions on a web application in which the user's authenticated.",
       "severity": "Severe"
   },
   {
       "cookie_name": "_abck",
       "description": "Cookies that do not have proper CSRF protections can be used to trick a browser into executing unwanted actions on a web application in which the user's authenticated.",
       "severity": "Severe"
   },
   {
       "cookie_name": "bm_sz",
       "description": "Cookies that do not have proper CSRF protections can be used to trick a browser into executing unwanted actions on a web application in which the user's authenticated.",
       "severity": "Severe"
   },


]



—------------------------


INPUT:


{
s_ecid:
MCMID%7C48220893490357231966672238249321390905,
DB4-pb-slid:
vuWbw80LI6TGctFQBiHOQ6Fi-IM%3D,
DB4-pb-slstat:
1
ajs_group_id:
null,
ajs_user_id:
%22c4abf76128570e7e9060cfe2e9c1b629c544aca460a1d047b637eaafdc980bef%22,
ajs_anonymous_id:
%22205b110b-b437-43d8-a7f8-8d57e6a5c8c0%22,
request_consent_v:
3,
CONSENTMGR:
c1:1%7Cc2:0%7Cc3:0%7Cc4:0%7Cc5:0%7Cc6:0%7Cc7:0%7Cc8:0%7Cc9:0%7Cc10:0%7Cc11:0%7Cc12:0%7Cc13:0%7Cc14:0%7Cc15:0%7Cts:1693928734197%7Cconsent:true,
optimizelyEndUserId:
oeu1693928736827r0.2219744256174878,
s_fid:
7F0A24C94FED49E0-2004706DFAE3A3BC,
s_vi:
[CS]v1|327BA690B37FD98A-40001AAE238B0D0D[CE],
iid:
e343302a-76d6-4a69-86ed-da4936de7af4,
S_IID:
e343302a-76d6-4a69-86ed-da4936de7af4,
bahn-language:
en,
S_HIDE_NEWSLETTER_REG:
true,
S_CONSENTMGR:
c1:1%7Cc2:0%7Cc3:0%7Cc4:0%7Cc5:0%7Cc6:0%7Cc7:0%7Cc8:0%7Cc9:0%7Cc10:0%7Cc11:0%7Cc12:0%7Cc13:0%7Cc14:0%7Cc15:0%7Cts:1693928734197%7Cconsent:true
AMCV_5FA50A5953FB37E50A4C98BC%40AdobeOrg
179643557%7CMCIDTS%7C19696%7CMCMID%7C48220893490357231966672238249321390905%7CMCAID%7CNONE%7CMCOPTOUT-1693928673s%7CNONE%7CvVersion%7C5.5.0,
utag_main:
v_id:018a660533eb00169a54f3b3dc2005075001406d00942$_sn:7$_se:1%3Bexp-session$_ss:1%3Bexp-session$_st:1709238154452%3Bexp-session$vapi_domain:bahn.de$ses_id:1709236354452%3Bexp-session$_pn:1%3Bexp-session,
_abck:
234F556BF35BEDF3AB748E8BD8EBE1EA~-1~YAAQ3AEQAmOCxvWNAQAA0gBt9gsL0cw/a2WrnSQSI/7DlyRIuCqrrfgPijsnAijaG1x+XsFFYi64ebH1okcthETjDW7Hiu9JKrGK+9LlQY6VtTxOzzIjiedXwSkqgVsACQLsitQjXwVLie06w1PuiW+fZOMapBGnbd3JG0l8qXuTpdVVa9KBQwuLT4TCITsaFY8GZTGCzbvj/0TUph1guoY6R5hA8HGqGe+c0krOwBLQFAelw7NJ9RbeJOMW5oF0x7BJTWQXr2nz3405yt5oYriUfbUWj8Y4ZxgMhPiDE3jmgLKelF5DGOPgY2WoXEjHFjpFJXvqQkUVe5l+DkBmsERSYlBOpHMrKIzBwTbDaoaSvQ8z92TTqWw=~-1~-1~-1,
bm_sz:
C4DAFD0B43C9058A62DB70C07ADAD363~YAAQ3AEQAmSCxvWNAQAA0gBt9ha7gxrZ0s0XR9ljmnOp9n3DoQ9DHsYbyqcuEm4X8dx4nyAe2SmmUvfvqM0P06slf+Ty3Pg47rrR6NImFydJchspZRB6g2qJ+r/eFh5t8Ny8+7MPg2SlDFNdW58DuL8tKR+uBQZOXoBC4AxrffxbflQmNdEbo4Md+u7kY3adL27gtB6p1pXdmfsaH91Radon0waBF4f2CTUWLvrtjkdVNWNK7u1GHWfNk72ndXN82zlTRRePRN54WP7G1VjJOv0TZwMOxaZ40c+tzb2na7LMbpuxRDuJ3rl/l2WtszGWzERot8jo1gXeCB21Ho3wXo309KQjEER5oeb3K3jlD8d4sw==~4342596~3425844,
TS01309da6:
0144e11a9159834e,
}




OUTPUT:


[
   {
       "cookie_name": "s_ecid",
       "description": "This cookie is associated with Adobe Experience Cloud and is used for identification of visitors across different Adobe solutions, enabling a unified view of the customer.",
       "severity": "Moderate"
   },
   {
       "cookie_name": "DB4-pb-slid",
       "description": "This cookie is used for session tracking and user identification, often in contexts related to personalized content or advertising.",
       "severity": "Moderate"
   },
   {
       "cookie_name": "DB4-pb-slstat",
       "description": "This cookie is likely used to store user preferences related to site functionality and possibly to track user behavior for site analytics.",
       "severity": "Safe"
   },
   {
       "cookie_name": "ajs_group_id",
       "description": "This cookie is set by analytics software to collect data on user behavior and interaction. It's used to improve the website's performance and user experience.",
       "severity": "Moderate"
   },
   {
       "cookie_name": "ajs_user_id",
       "description": "This cookie is used by tracking software to distinguish users, helping in the analysis of users' interaction with the website and service improvement.",
       "severity": "Moderate"
   },
   {
       "cookie_name": "ajs_anonymous_id",
       "description": "This cookie is used to track anonymous user information. This is typically used for analytics and helps in creating a better user experience.",
       "severity": "Safe"
   },
   {
       "cookie_name": "request_consent_v",
       "description": "This cookie stores the consent version for user preferences, typically related to cookies and tracking. It ensures compliance with privacy regulations.",
       "severity": "Safe"
   },
   {
       "cookie_name": "CONSENTMGR",
       "description": "This cookie manages user consent preferences, ensuring that user choices regarding tracking and analytics are respected across the website.",
       "severity": "Safe"
   },
   {
       "cookie_name": "optimizelyEndUserId",
       "description": "This cookie is used by Optimizely for A/B testing and personalization. It tracks user preferences and behavior to test website changes and improvements.",
       "severity": "Moderate"
   },
   {
       "cookie_name": "s_fid",
       "description": "This cookie is a fallback unique identifier when the standard s_vi cookie is not available due to third-party cookie restrictions. It's used for tracking visitors.",
       "severity": "Moderate"
   },
   {
       "cookie_name": "s_vi",
       "description": "This cookie is associated with the Adobe Site Catalyst analytics software. It is used for identifying unique visitors with a timestamp and a random number.",
       "severity": "Moderate"
   },
   {
       "cookie_name": "iid",
       "description": "This cookie is likely used for internal tracking or identification purposes, potentially related to user sessions or specific user actions within the site.",
       "severity": "Safe"
   },
   {
       "cookie_name": "S_IID",
       "description": "This cookie appears to be a duplicate of 'iid', serving similar purposes of tracking or identification within the site.",
       "severity": "Safe"
   },
   {
       "cookie_name": "bahn-language",
       "description": "This cookie stores the user's language preference, ensuring the website content is presented in the chosen language for a better user experience.",
       "severity": "Safe"
   },
   {
       "cookie_name": "S_HIDE_NEWSLETTER_REG",
       "description": "This cookie likely tracks whether the user has seen or interacted with newsletter registration prompts, improving site experience by avoiding repeated prompts.",
       "severity": "Safe"
   },
   {
       "cookie_name": "S_CONSENTMGR",
       "description": "This cookie is a duplicate of 'CONSENTMGR', managing user consent preferences for tracking and analytics, ensuring compliance with privacy laws.",
       "severity": "Safe"
   },
   {
       "cookie_name": "AMCV_5FA50A5953FB37E50A4C98BC@AdobeOrg",
       "description": "This cookie is associated with Adobe Marketing Cloud. It stores a unique visitor identifier, and uses an identifier for Adobe Experience Cloud.",
       "severity": "Moderate"
   },
   {
       "cookie_name": "utag_main",
       "description": "This cookie is associated with Tealium's tag management system. It tracks visitor and session counts, helping in optimizing the tagging strategies.",
       "severity": "Safe"
   },
   {
       "cookie_name": "_abck",
       "description": "This cookie is associated with Akamai's Bot Manager. It provides a unique identifier for users to differentiate between human and bot traffic.",
       "severity": "Moderate"
   },
   {
       "cookie_name": "bm_sz",
       "description": "This cookie is related to Akamai's content delivery network and is used for optimizing website performance and security measures.",
       "severity": "Safe"
   },
   {
       "cookie_name": "TS01309da6",
       "description": "This cookie is commonly associated with traffic management and load balancing, ensuring an equitable distribution of site traffic to optimize user experience.",
       "severity": "Safe"
   }
]


—-----—-----—-----—-----—-----—-----—-----—-----—-----—-----—-----—-----—-----—-----—-----—-----—-----—--

Now your task is to return the OUTPUT for the following INPUT data. (Very important is that the output is nothing BUT a valid JSON. You will be very heavily penalized if you don’t return a purely valid JSON object):

`;


async function fetchModelResponse(cookiesDict) {
    // const prompt = "what is the capital city of pakistan?";
    const apiKey = "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";

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [
                    {
                        "role": "user",
                        "content": prompt + `\n ${JSON.stringify(cookiesDict)}`,
                        // "content": "where is karachi?",

                    }
                ],
                "max_tokens": 4096,
                "temperature": 0.2,
                // "response_format":{ "type": "json_object" },
            }),
        });
        const responseData = await response.json();
        // console.log(responseData.choices[0].message.content);

        var cookies_response = JSON.parse(responseData.choices[0].message.content);
        console.log(cookies_response); 
    
        return cookies_response;

    } catch (error) {
        console.error('Error:', error);
        throw error; // Propagate error to be handled by the caller
    }
}


chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.cookies.getAll({ url: tabs[0].url }, function (cookies) {
        var cookieTable = document.getElementById('cookieTable').getElementsByTagName('tbody')[0];

        let cookiesDict = {}; 

        cookies.forEach(function (cookie) {
            cookiesDict[cookie.name] = cookie.value;
        });

        modelResponse = fetchModelResponse(cookiesDict);

        modelResponse.then(function(response) {
            // Now 'response' is the value that the Promise resolved to
            response.forEach(function (cookieResp) {
                var row = cookieTable.insertRow();
                var nameCell = row.insertCell(0);
                var descriptionCell = row.insertCell(1);
                var severityCell = row.insertCell(2);
        
                nameCell.textContent = cookieResp.cookie_name || "";
                descriptionCell.textContent = cookieResp.description || "";
                severityCell.textContent = cookieResp.severity || "";

                if (cookieResp.severity) {
                    var severityClass = '';
                    switch (cookieResp.severity.toLowerCase()) {
                        case 'safe':
                            severityClass = 'safe';
                            break;
                        case 'moderate':
                            severityClass = 'moderate';
                            break;
                        case 'severe':
                            severityClass = 'severe';
                            break;
                    }
                    severityCell.classList.add(severityClass);
                }
            });
        }).catch(function(error) {
            // Handle any errors here
            console.error('Error:', error);
        });

    });
});
