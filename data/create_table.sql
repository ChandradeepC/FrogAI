-- Create the monitor_data table
CREATE TABLE monitor_data (
  name VARCHAR(255),
  persistence FLOAT,
  response FLOAT,
  contrast FLOAT,
  brightness FLOAT,
  volume FLOAT,
  sharp FLOAT,
  subpixel FLOAT,
  res VARCHAR(255),
  rr VARCHAR(255),
  panel VARCHAR(255),
  size VARCHAR(255),
  cost FLOAT,
  min_gpu VARCHAR(255),
  curve VARCHAR(255),
  adobe_rgb VARCHAR(255),
  hdr VARCHAR(255),
  aspect VARCHAR(255),
  special TEXT,
  reviews TEXT
);

-- Create indexes on most columns
CREATE INDEX monitor_name_idx ON monitor_data (name);
CREATE INDEX monitor_persistence_idx ON monitor_data (persistence);
CREATE INDEX monitor_response_idx ON monitor_data (response);
CREATE INDEX monitor_contrast_idx ON monitor_data (contrast);
CREATE INDEX monitor_brightness_idx ON monitor_data (brightness);
CREATE INDEX monitor_volume_idx ON monitor_data (volume);
CREATE INDEX monitor_sharp_idx ON monitor_data (sharp);
CREATE INDEX monitor_subpixel_idx ON monitor_data (subpixel);
CREATE INDEX monitor_res_idx ON monitor_data (res);
CREATE INDEX monitor_rr_idx ON monitor_data (rr);
CREATE INDEX monitor_panel_idx ON monitor_data (panel);
CREATE INDEX monitor_size_idx ON monitor_data (size);
CREATE INDEX monitor_cost_idx ON monitor_data (cost);
CREATE INDEX monitor_min_gpu_idx ON monitor_data (min_gpu);
CREATE INDEX monitor_curve_idx ON monitor_data (curve);
CREATE INDEX monitor_adobe_rgb_idx ON monitor_data (adobe_rgb);
CREATE INDEX monitor_hdr_idx ON monitor_data (hdr);
CREATE INDEX monitor_aspect_idx ON monitor_data (aspect);
CREATE INDEX monitor_special_idx ON monitor_data (special);