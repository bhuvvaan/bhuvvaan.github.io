---
layout: page
title: Smart cane to find socially preferred seats
description: 2021-2022
img: assets/img/demo_smartcane.jpeg
# redirect: https://unsplash.com
importance: 1
category: work
---

We designed a robotics cane system that leverages computer vision, and insights from psychology and
haptics literature to enable users to navigate to socially preferred empty chairs. Our social-norm aware
chair selection algorithm optimizes for users privacy, convenience and intimacy creating a potential for
blind people to exercise the nuances of seat choices.

<div class="row">
    <div class="col-sm mt-3 mt-md-0" style="vertical-align:middle">
        {% include figure.html path="assets/img/paper/social_guidance/social_guidance_demo.gif" title="System in action" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    With our system, the blindfloded user is able to find and navigate to the more socially preffered seats.
</div>


**Paper presentation @ IROS 22 Kyoto, Japan**
<div class="video-container">
<iframe src="https://www.youtube.com/embed/6lmUHh1aFFg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


<br /><br />
**Poster**
<iframe src="https://drive.google.com/file/d/1VP3k-SudX21NZ_HvtA49C2bNZuhjbgAo/preview" width="640" height="480" allow="autoplay"></iframe>

<br /><br />
**System Demo Video** 
<div class="video-container">
<iframe src="https://www.youtube.com/embed/fcOJgpEuN9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br /><br />
**Paper**
<div class="publications">
{% bibliography -f papers -q @*[topic=social_guidance]* %}
</div>