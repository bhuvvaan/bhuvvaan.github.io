---
layout: page
title: ShelfMCL - Semantic particle filter localization with low-cost sensors
date: 2024-05-20
description:
img: assets/img/paper/shelfhelp/cover.jpg
# img: https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcHgxMzgyNjcyLWltYWdlLWt3eXFrZHR5LmpwZw.jpg?s=5i_WsjSiGsjd3dh0cW88obuceCo8lP2eP7-3WYh62qs
# redirect: https://unsplash.com
importance: 1
category: work
---

    Team members:
    Shivendra Agrawal (lead)
    Ashutosh Naik (Graduate researcher)
    Dusty Woods (Lab Manager)
    Jake Brawer (Postdoc)
    Bradley Hayes (Advisor)

## Overview
- **Problem:** Estimating where an autonomous system is in a dynamic and cluttered environment such as a grocery store is challenging and unsolved. Such localization ability is essential to providing navigation guidance.
<div class="row justify-content-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/paper/shelfmcl/husky.gif" title="Our system's capabilities across tasks" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
- **Solution:** We present a novel Semantic Monte Carlo Localization algorithm that requires just an RGB-D camera and a visual odometry camera. Our system can be **1.** mounted on a cart or **2.** worn as a wearable.

## Challenges
**Environmental Complexity:**
- The uniform and symmetric nature of aisles makes depth or LiDAR observations essentially featureless and unreliable.
<div class="row justify-content-center">
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/paper/shelfmcl/rays.gif" title="Our system's capabilities across tasks" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
- Constantly changing product stock and poses exacerbates the localization challenge.
<div class="row justify-content-center">
    <div class="col-sm-4 mt-3 mt-md-0 mx-3">
        {% include figure.liquid path="assets/img/paper/shelfmcl/dusty_stock.gif" title="First Image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0 mx-3">
        {% include figure.liquid path="assets/img/paper/shelfmcl/lidarline.gif" title="Second Image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/paper/shelfmcl/2Dmapofthemockstore.png" title="2D Map of Mock Store" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<br>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/paper/shelfmcl/dusty_product_stock.mp4" title="Dynamic Environment Challenges" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<br>

## Our Solution
We developed a novel semantic Particle Filter with the following key features:

**Minimal Sensor Requirements:**
- Uses low-cost sensors: RGB-D camera and Visual Odometry camera
- Does not require wheel encoders or expensive LiDAR systems

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/paper/shelfmcl/sensors.jpg" title="Sensor Setup" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<br>

**Versatile Mounting Options:**
1. Can be mounted on carts/strollers to add autonomous capabilities
2. Wearable configuration to support assistive technology

<div class="row">
    <div class="col-sm-6">
        {% include figure.liquid path="assets/img/paper/shelfmcl/maria_cart.mp4" title="Cart Mount Demo" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6">
        {% include figure.liquid path="assets/img/paper/shelfmcl/dusty_wearable.mp4" title="Wearable Configuration" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<br>

## Technical Approach

**Semantic Mapping:**
- Custom classifier for product classification
- Product pose estimation using inverse camera projection
- Ray casting for pose correction

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/paper/shelfmcl/classification.mp4" title="Semantic Classification" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<br>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/paper/shelfmcl/product_clusters_map.png" title="Product Pose Estimation" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<br>

## Experiments and Results
We tested our system in two configurations:
1. As a wearable device for assistive navigation
2. As a mountable rig on shopping carts

<div class="row">
    <div class="col-sm-6">
        {% include figure.liquid path="assets/img/paper/shelfmcl/trajectory_plot.png" title="System Trajectory" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6">
        {% include figure.liquid path="assets/img/paper/shelfmcl/particle_filter_trajectory_plot.png" title="Particle Filter Results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<br>

## Demo 
<div class="video-container">
<iframe src="https://www.youtube.com/embed/8q65wmsDsjU?si=5Ti_ab-E149Cmji4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

**Key Findings:**
- Without semantic information, the system converges incorrectly
- Our semantic approach enables correct convergence
- Successfully performs global localization and maintains tracking

<br>








