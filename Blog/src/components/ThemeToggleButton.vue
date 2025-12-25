<template>
    <li class="nav-item position-relative">
        <svg id="moon" :class="`position-absolute theme-toggle opacity-0`" xmlns="http://www.w3.org/2000/svg" width="35px"
            height="35px" viewBox="0 0 24 24" fill="none">
            <path
                d="M13 6V3M18.5 12V7M14.5 4.5H11.5M21 9.5H16M15.5548 16.8151C16.7829 16.8151 17.9493 16.5506 19 16.0754C17.6867 18.9794 14.7642 21 11.3698 21C6.74731 21 3 17.2527 3 12.6302C3 9.23576 5.02061 6.31331 7.92462 5C7.44944 6.05072 7.18492 7.21708 7.18492 8.44523C7.18492 13.0678 10.9322 16.8151 15.5548 16.8151Z"
                stroke="#38b6ff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <svg id="sun" :class="`theme-toggle`" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px"
            viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3.5" stroke="#38b6ff" />
            <path d="M12 5V3" stroke="#38b6ff" stroke-linecap="round" />
            <path d="M12 21V19" stroke="#38b6ff" stroke-linecap="round" />
            <path d="M16.9498 7.04996L18.364 5.63574" stroke="#38b6ff" stroke-linecap="round" />
            <path d="M5.63608 18.3644L7.05029 16.9502" stroke="#38b6ff" stroke-linecap="round" />
            <path d="M19 12L21 12" stroke="#38b6ff" stroke-linecap="round" />
            <path d="M3 12L5 12" stroke="#38b6ff" stroke-linecap="round" />
            <path d="M16.9498 16.95L18.364 18.3643" stroke="#38b6ff" stroke-linecap="round" />
            <path d="M5.63608 5.63559L7.05029 7.0498" stroke="#38b6ff" stroke-linecap="round" />
        </svg>
    </li>
</template>
  