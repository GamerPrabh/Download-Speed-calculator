document.getElementById('speedForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the user inputs
    const speed = parseFloat(document.getElementById('speed').value);
    const size = parseFloat(document.getElementById('size').value);
    const speedUnit = document.getElementById('speedUnit').value;
    const sizeUnit = document.getElementById('sizeUnit').value;

    // Convert speed to Mbps
    let speedMbps;
    if (speedUnit === 'Kbps') {
        speedMbps = speed / 1000; // Convert Kbps to Mbps
    } else if (speedUnit === 'Gbps') {
        speedMbps = speed * 1000; // Convert Gbps to Mbps
    } else {
        speedMbps = speed; // Already in Mbps
    }

    // Convert file size to MB
    let fileSizeMB;
    if (sizeUnit === 'KB') {
        fileSizeMB = size / 1024; // Convert KB to MB
    } else if (sizeUnit === 'GB') {
        fileSizeMB = size * 1024; // Convert GB to MB
    } else {
        fileSizeMB = size; // Already in MB
    }

    // Convert speed from Mbps to MBps (1 Mbps = 0.125 MBps)
    const speedMBps = speedMbps * 0.125;

    // Calculate download time in seconds
    const downloadTime = fileSizeMB / speedMBps;

    // Convert download time to hours, minutes, and seconds
    const hours = Math.floor(downloadTime / 3600);
    const minutes = Math.floor((downloadTime % 3600) / 60);
    const seconds = Math.floor(downloadTime % 60);

    // Display the result based on time duration
    let result = '';
    if (hours > 0) {
        result = `Estimated download time: ${hours} hr ${minutes} min ${seconds} sec`;
    } else if (minutes > 0) {
        result = `Estimated download time: ${minutes} min ${seconds} sec`;
    } else {
        result = `Estimated download time: ${seconds} sec`;
    }

    document.getElementById('result').innerText = result;
});