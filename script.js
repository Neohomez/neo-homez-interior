const calculateSliderSplit = (clientX) => {
    // Read the measurement once, outside the write loop
    const boundingBox = sliderWidget.getBoundingClientRect();
    const absoluteX = clientX - boundingBox.left;
    
    // Perform write operations in a requestAnimationFrame to avoid thrashing
    requestAnimationFrame(() => {
        let horizontalPercentage = (absoluteX / boundingBox.width) * 100;
        horizontalPercentage = Math.max(0, Math.min(100, horizontalPercentage));
        
        afterPanel.style.width = `${horizontalPercentage}%`;
        sliderHandle.style.transform = `translateX(${percentage}%)`;;
    });
};
